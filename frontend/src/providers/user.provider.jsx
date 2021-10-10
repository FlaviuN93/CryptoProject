import React, { useState, createContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';

import { useHttpClient } from '../shared/hooks/http-hook';

export const UserContext = createContext({
  login: () => {},
  logout: () => {},
  signupRequest: () => {},
  loginRequest: () => {},
  isLoading: false,
});

let logoutTimer;
const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {};

const UserProvider = ({ children }) => {
  let { isLoading, error, sendRequest } = useHttpClient();
  const [userInfo, setUserInfo] = useState(userFromLocalStorage);
  const [tokenDate, setTokenDate] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback((user, token, expirationDate) => {
    setIsLoggedIn(true);
    const tokenExpiration =
      expirationDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3);
    setTokenDate(tokenExpiration);
    setUserInfo({
      user: user,
      token: token,
      expirationDate: tokenExpiration.toISOString(),
    });
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setTokenDate(null);
    localStorage.removeItem('userInfo');
  }, []);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    if (
      !isLoggedIn &&
      userFromLocalStorage &&
      userFromLocalStorage.user &&
      userFromLocalStorage.token &&
      new Date(userFromLocalStorage.expirationDate) > new Date()
    ) {
      login(
        userFromLocalStorage.user,
        userFromLocalStorage.token,
        new Date(userFromLocalStorage.expirationDate)
      );
    }
  }, [login, userInfo, isLoggedIn]);

  useEffect(() => {
    if (userInfo.token && tokenDate) {
      const remainingTime = tokenDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userInfo.token, logout, tokenDate]);

  const signupRequest = async ({ name, email, password, confirmPassword }) => {
    const response = await sendRequest(
      'http://localhost:5000/api/v1/users/signup',
      'POST',
      JSON.stringify({ name, email, password, confirmPassword }),
      { 'Content-Type': 'application/json' }
    );
    const { data, token } = response;

    login(data.user, token);
  };
  const loginRequest = async (email, password) => {
    const response = await sendRequest(
      'http://localhost:5000/api/v1/users/login',
      'POST',
      JSON.stringify({ email, password }),
      { 'Content-Type': 'application/json' }
    );

    const { data, token } = response;
    login(data.user, token);
  };

  return (
    <UserContext.Provider
      value={{
        signupRequest,
        loginRequest,
        login,
        isLoggedIn,
        logout,
        isLoading,
        error,
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

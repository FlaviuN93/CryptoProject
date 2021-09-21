import React, { useState, createContext, useEffect, useCallback } from 'react';

import { useHttpClient } from '../shared/http-hook';

export const ProfileContext = createContext({});

const ProfileProvider = ({ children }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [userInfo, setUserInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const signupRequest = async ({ name, email, password, confirmPassword }) => {
    const response = await sendRequest(
      'http://localhost:5000/api/v1/users/signup',
      'POST',
      JSON.stringify({ name, email, password, confirmPassword }),
      { 'Content-Type': 'application/json' }
    );
    const { data, token } = response;

    setUserInfo({ user: data.user, token });
  };
  const loginRequest = async (email, password) => {
    const response = await sendRequest(
      'http://localhost:5000/api/v1/users/login',
      'POST',
      JSON.stringify({ email, password }),
      { 'Content-Type': 'application/json' }
    );

    const { data, token } = response;

    setUserInfo({ user: data.user, token });
  };

  return (
    <ProfileContext.Provider
      value={{
        signupRequest,
        loginRequest,
        isLoggedIn,
        isLoading,
        error,
        userInfo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

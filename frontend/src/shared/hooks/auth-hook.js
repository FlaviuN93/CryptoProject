// import React, { useState, useCallback, useEffect } from 'react';

// export const useAuth = () => {
//   const [tokenDate, setTokenDate] = useState();
//   const [userInfo, setUserInfo] = useState({});

//   const login = useCallback((user, token, expirationDate) => {
//     const tokenExpiration =
//       expirationDate ||
//       new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3);
//     setUserInfo({
//       user,
//       token,
//       expirationDate: tokenExpiration.toISOString(),
//     });
//     setTokenDate(tokenExpiration);
//   }, []);

//   const logout = useCallback(() => {
//     setUserInfo(null);
//     setTokenDate(null);
//     localStorage.removeItem('userInfo');
//   }, []);

//   useEffect(() => {
//     if (
//       userFromLocalStorage &&
//       userFromLocalStorage.token &&
//       new Date(userFromLocalStorage.expirationDate) > new Date()
//     ) {
//       login(
//         userFromLocalStorage.user,
//         userFromLocalStorage.token,
//         new Date(userFromLocalStorage.expirationDate)
//       );
//     }
//   }, [login]);

//   useEffect(() => {
//     if (userInfo.token && tokenDate) {
//       const remainingTime = tokenDate.getTime() - new Date().getTime();
//       logoutTimer = setTimeout(logout, remainingTime);
//     } else {
//       clearTimeout(logoutTimer);
//     }
//   }, [userInfo.token, logout, tokenDate, userInfo]);

//   return { login, logout };
// };

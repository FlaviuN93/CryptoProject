// import React, { useState, createContext, useEffect, useCallback } from 'react';

// import { useHttpClient } from '../shared/hooks/http-hook';

// export const UserContext = createContext({
//   login: () => {},
//   logout: () => {},
//   signupRequest: () => {},
//   loginRequest: () => {},
//   isLoading: false,
// });

// const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || {};

// const UserProvider = ({ children }) => {
//   let { isLoading, error, sendRequest } = useHttpClient();
//   const [userInfo, setUserInfo] = useState(userFromLocalStorage);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const login = useCallback(() => {
//     setIsLoggedIn(true);
//   }, []);
//   const logout = useCallback(() => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('userInfo');
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('userInfo', JSON.stringify(userInfo));
//   }, [userInfo]);

//   const signupRequest = async ({ name, email, password, confirmPassword }) => {
//     const response = await sendRequest(
//       'http://localhost:5000/api/v1/users/signup',
//       'POST',
//       JSON.stringify({ name, email, password, confirmPassword }),
//       { 'Content-Type': 'application/json' }
//     );
//     const { data, token } = response;

//     setUserInfo({ user: data.user, token });
//   };
//   const loginRequest = async (email, password) => {
//     const response = await sendRequest(
//       'http://localhost:5000/api/v1/users/login',
//       'POST',
//       JSON.stringify({ email, password }),
//       { 'Content-Type': 'application/json' }
//     );

//     const { data, token } = response;

//     setUserInfo({ user: data.user, token });
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         signupRequest,
//         loginRequest,
//         login,
//         isLoggedIn,
//         logout,
//         isLoading,
//         error,
//         userInfo,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;

import React, { useState, createContext, useEffect } from 'react';

const UserContext = createContext({
  isLoggedIn: false,
});

const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { AuthContext } from './context/data/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
  }, [isLoggedIn]);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Redirect to='/' />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import { UserContext } from './context/data/user.context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <UserContext.Provider value={{ isLoggedIn, logout, login }}>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

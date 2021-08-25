import React from 'react';
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
import UserProvider from './providers/user.provider';
import CryptoProvider from './providers/crypto.provider';

const App = () => {
  return (
    <UserProvider>
      <CryptoProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </CryptoProvider>
    </UserProvider>
  );
};

export default App;

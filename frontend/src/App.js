import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import './shared/scss/icons.scss';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import UserProvider from './providers/user.provider';
import CryptoProvider from './providers/crypto.provider';
import ProfilePage from './pages/ProfilePage';
import StatesProvider from './providers/states.provider';

const App = () => {
  return (
    <UserProvider>
      <CryptoProvider>
        <StatesProvider>
          <Router>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/user/:id' component={ProfilePage} />
              <Redirect to='/' />
            </Switch>
          </Router>
        </StatesProvider>
      </CryptoProvider>
    </UserProvider>
  );
};

export default App;

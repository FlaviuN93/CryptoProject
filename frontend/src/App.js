import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className='overview_layout'>
        <Route path='/' component={Sidebar} exact />
        <Route path='/' component={Dashboard} exact />
      </div>
    </Router>
  );
};

export default App;

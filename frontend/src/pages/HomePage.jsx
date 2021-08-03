import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='overview_layout'>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default HomePage;

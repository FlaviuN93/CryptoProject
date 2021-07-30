import React from 'react';
import Header from './Header';
import './Dashboard.css';
import { Container } from '@material-ui/core';
import Wallet from './Wallet';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Wallet />
    </Container>
  );
};

export default Dashboard;

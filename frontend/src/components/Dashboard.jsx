import React from 'react';
import Header from './Header';
import { Container } from '@material-ui/core';
import Wallet from './Wallet';
import AddCurrencyCard from './AddCurrencyCard';
import LineChart2 from './LineChart2';
const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Wallet />
      <AddCurrencyCard />
      <LineChart2 />
    </Container>
  );
};

export default Dashboard;

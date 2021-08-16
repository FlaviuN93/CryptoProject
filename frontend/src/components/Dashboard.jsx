import React from 'react';
import Header from './Header';
import { Container } from '@material-ui/core';
import Wallet from './Wallet';
import LineChart from './LineChart';
import AddCurrencyCard from './AddCurrencyCard';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Wallet />
      <AddCurrencyCard />
      <LineChart />
    </Container>
  );
};

export default Dashboard;

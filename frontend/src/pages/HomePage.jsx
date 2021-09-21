import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { Container } from '@material-ui/core';

import Header from '../components/HomeComponents/Header';
import Wallet from '../components/HomeComponents/Wallet';
import AddCurrencyCard from '../components/HomeComponents/AddCurrencyCard';
import LineChart2 from '../components/SharedComponents/LineChart2';
import ResponsiveHomeSidebar from '../components/HomeComponents/ResponsiveHomeSidebar';
import HomeSidebar from '../components/HomeComponents/HomeSidebar';
import TrendSection from '../components/HomeComponents/TrendSection';

const useStyles = makeStyles((theme) => ({
  tabletContainer: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    height: '100vh',
  },
  desktopContainer: {
    display: 'grid',
    gridTemplateColumns: '273px 1fr',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '233px 1fr',
    },
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const isTablet = useMediaQuery('(max-width:60em)');
  return (
    <>
      {isTablet ? (
        <div className={classes.tabletContainer}>
          <ResponsiveHomeSidebar />
          <div>
            <Header />
            <Wallet />
            <AddCurrencyCard />
            <LineChart2 />
            <TrendSection />
          </div>
        </div>
      ) : (
        <div className={classes.desktopContainer}>
          <HomeSidebar />
          <div style={{ marginLeft: '55px' }}>
            <Header />
            <Wallet />
            <AddCurrencyCard />
            <LineChart2 />
            <TrendSection />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;

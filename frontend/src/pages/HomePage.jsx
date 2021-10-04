import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';

import Header from '../components/HomeComponents/Header';
import AddCurrencyCard from '../components/HomeComponents/AddCurrencyCard';
import MainChart from '../components/SharedComponents/MainChart';
import ResponsiveHomeSidebar from '../components/HomeComponents/ResponsiveHomeSidebar';
import HomeSidebar from '../components/HomeComponents/HomeSidebar';
import TrendSection from '../components/HomeComponents/TrendSection';
import HistorySection from '../components/HomeComponents/HistorySection';

const useStyles = makeStyles((theme) => ({
  tabletContainer: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    height: '100vh',
  },
  marginSpace: {
    marginLeft: '30px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '15px',
    },
  },
  desktopContainer: {
    display: 'grid',
    gridTemplateColumns: '273px 1fr',

    height: '100vh',
    gridRowGap: '5rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '233px 1fr',
    },
  },
  trendHistoryContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  margin: {
    [theme.breakpoints.down('lg')]: {
      marginLeft: '125px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginLeft: '0',
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
          <div className={classes.marginSpace}>
            <Header />
            <AddCurrencyCard />
            <MainChart />
            <div className={classes.trendHistoryContainer}>
              <TrendSection />
              <HistorySection />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.desktopContainer}>
          <HomeSidebar />
          <div style={{ marginLeft: '55px' }}>
            <Header />
            <AddCurrencyCard />
            <MainChart />
            <div className={classes.trendHistoryContainer}>
              <TrendSection />
              <div className={classes.margin}>
                <HistorySection />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;

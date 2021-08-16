import { makeStyles, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Dashboard from '../components/Dashboard';
import ResponsiveSidebar from '../components/ResponsiveSidebar';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles({
  tabletContainer: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto, 150px)',
    gridTemplateColumns: '80px 1fr',
    height: '100vh',
  },
  desktopContainer: {
    display: 'grid',
    gridTemplateColumns: 'minmax(180px, 14%) 1fr',
    gridTemplateRows: 'repeat(auto, 150px)',
    height: '100vh',
  },
});
const HomePage = () => {
  const classes = useStyles();
  const isTablet = useMediaQuery('(max-width:68.75em)');
  return (
    <>
      {isTablet ? (
        <div className={classes.tabletContainer}>
          <ResponsiveSidebar />
          <Dashboard />
        </div>
      ) : (
        <div className={classes.desktopContainer}>
          <Sidebar />
          <Dashboard />
        </div>
      )}
    </>
  );
};

export default HomePage;

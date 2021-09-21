import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const LoadingSpinner = () => {
  const useStyles = makeStyles({
    root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#53b9ea',
    },
  });
  const classes = useStyles();
  return (
    <div className='spinner-container'>
      <CircularProgress
        style={{ height: '75px', width: '75px' }}
        className={classes.root}
      />
    </div>
  );
};

export default LoadingSpinner;

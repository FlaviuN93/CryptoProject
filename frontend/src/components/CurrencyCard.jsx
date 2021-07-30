import React from 'react';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    border: '1px solid #E2E2E8',
    width: '14rem',
    height: '6rem',
    borderRadius: '14px',
    '&:active': {
      backgroundColor: '#53B9EA',
      color: 'white',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '.75fr 1.5fr',
  },
});

const CurrencyCard = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      <div>
        <img src='#' alt='BTC' />
      </div>
      <div className={classes.grid}>
        <div>
          <p>price</p>
          <p>graph</p>
        </div>
        <div>
          <p>short</p>
          <p>
            arrow <span>percent</span>
          </p>
        </div>
      </div>
    </Button>
  );
};

export default CurrencyCard;

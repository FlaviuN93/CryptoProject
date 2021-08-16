import React from 'react';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Card } from '@material-ui/core';
import './CurrencyCard.scss';

const CurrencyCard = (props) => {
  const { icon, short, price } = props;

  return (
    <>
      <Card style={{ borderRadius: '20px' }} className='currency-card'>
        <div className='currency-card__grid'>
          <div>
            <img
              style={{ width: '22px', height: '22px' }}
              src={icon}
              alt={short}
            />
          </div>
          <div>
            <p>{price.july}$</p>
            <TrendingDownIcon style={{ color: '#E3507A', fontSize: '26px' }} />
          </div>
          <div>
            <p className='currency-short'>{short}</p>
            <p>percent</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CurrencyCard;

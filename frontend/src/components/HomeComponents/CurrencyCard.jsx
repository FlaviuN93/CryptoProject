import React, { useState } from 'react';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './CurrencyCard.scss';

const CurrencyCard = (props) => {
  const { icon, short, price } = props;
  const [selectCard, setSelectCard] = useState(false);

  const handleClick = (event) => setSelectCard(!selectCard);

  return (
    <>
      <div
        style={{ borderRadius: '9px' }}
        className={`${selectCard ? 'currency-card-active' : ''} currency-card`}
        onClick={handleClick}
      >
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
      </div>
    </>
  );
};

export default CurrencyCard;

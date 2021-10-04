import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { calculatePercent } from '../../utils/cryptoFunctions';
import SmallLineChart from '../SharedComponents/SmallLineChart';

import './CurrencyCard.scss';

const CurrencyCard = (props) => {
  const { icon, short, price } = props.crypto;
  const [selectCard, setSelectCard] = useState(false);
  const percentageResult = calculatePercent(price.july, price.june);
  const isTablet = useMediaQuery('(max-width:50em)');
  const handleClick = () => setSelectCard(!selectCard);
  return (
    <>
      <div
        style={{ borderRadius: '9px' }}
        className='currency-card'
        onClick={handleClick}
      >
        <div className='currency-card-container'>
          <div className='currency-card-icon'>
            <img
              style={{ width: '22px', height: '22px' }}
              src={icon}
              alt={short}
            />
          </div>
          <div className='currency-card-info'>
            <div className='currency-card-price'>{price.july}$</div>
            <div className='currency-card-name'>{short}</div>

            {isTablet ? (
              <SmallLineChart
                width={32}
                height={16}
                crypto={props.crypto}
                backgroundColor={'rgba(255, 246, 240, 0.7)'}
                pricePercentage={percentageResult}
              />
            ) : (
              <SmallLineChart
                width={42}
                height={20}
                crypto={props.crypto}
                backgroundColor={'rgba(255, 246, 240, 0.7)'}
                pricePercentage={percentageResult}
              />
            )}

            <div>
              {percentageResult > 0 ? (
                <img
                  className='up-arrow'
                  src='images/icons/UpArrow@x3.png'
                  alt='up-arrow'
                  id='arrow'
                />
              ) : (
                <img
                  className='down-arrow'
                  src='images/icons/DownArrow@x3.png'
                  alt='down-arrow'
                  id='arrow'
                />
              )}{' '}
              <span className='currency-card-percentage'>
                {percentageResult.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyCard;

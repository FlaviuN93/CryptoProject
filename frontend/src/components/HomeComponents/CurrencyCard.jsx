import React, { useState } from 'react';
import { calculatePercent } from '../../utils/cryptoFunctions';
import SmallLineChart from '../SharedComponents/SmallLineChart';
import './CurrencyCard.scss';

const CurrencyCard = (props) => {
  const { icon, short, price } = props.crypto;
  const [selectCard, setSelectCard] = useState(false);
  const percentageResult = calculatePercent(price.june, price.may);
  console.log(percentageResult);
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
            <SmallLineChart
              crypto={props.crypto}
              margin={'2 0 0 5'}
              backgroundColor={'rgba(255, 246, 240, 0.7)'}
              pricePercentage={percentageResult}
            />

            <div>
              {percentageResult > 0 ? (
                <img
                  className='up-arrow'
                  src='images/icons/UpArrow@x3.png'
                  alt='up-arrow'
                  style={{
                    width: '6px',
                    height: '6px',
                    marginRight: '3px',
                    marginBlockEnd: '3px',
                  }}
                />
              ) : (
                <img
                  className='down-arrow'
                  src='images/icons/DownArrow@x3.png'
                  alt='down-arrow'
                  style={{
                    width: '6px',
                    height: '6px',
                    marginRight: '3px',
                    marginBlockEnd: '3px',
                  }}
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

import React, { useContext } from 'react';
import { CryptoContext } from '../../providers/crypto.provider';
import { calculatePercent } from '../../utils/cryptoFunctions';
import SmallLineChart from '../SharedComponents/SmallLineChart';
import './TrendSection.scss';
const TrendSection = () => {
  const { cryptos } = useContext(CryptoContext);

  return (
    <div>
      <h3 className='trend-title'>Trend</h3>
      <div className='trend-container'>
        {cryptos.map(
          (crypto, index) =>
            index <= 3 && (
              <div key={index} className='trend-item-container'>
                <div className='trend-item-exchange'>
                  <div>
                    <span
                      style={{ marginRight: '14px' }}
                      className='trend-item-crypto'
                    >
                      {crypto.short}
                    </span>
                    <span style={{ marginRight: '14px' }}>
                      <img
                        src='images/icons/TradeIcon@x3.png'
                        alt='trade-icon'
                        style={{
                          width: '9px',
                          height: '9px',
                        }}
                      />
                    </span>
                    <span className='trend-item-currency'>usd</span>
                  </div>
                  <div>
                    {calculatePercent(crypto.price.june, crypto.price.may) >
                    0 ? (
                      <img
                        className='up-arrow'
                        src='images/icons/UpArrow@x3.png'
                        alt='up-arrow'
                        style={{
                          width: '6px',
                          height: '6px',
                          marginRight: '6.5px',
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
                          marginRight: '6.5px',
                        }}
                      />
                    )}
                    <span className='trend-item-percentage'>
                      {calculatePercent(
                        crypto.price.june,
                        crypto.price.may
                      ).toFixed(2)}
                      %
                    </span>
                  </div>
                </div>{' '}
                <div className='trend-item-price'>{crypto.current_price}</div>
                <div className='trend-item-graph'>
                  <SmallLineChart
                    pricePercentage={calculatePercent(
                      crypto.price.june,
                      crypto.price.may
                    )}
                    crypto={crypto}
                    width={185}
                    height={75}
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default TrendSection;

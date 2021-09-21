import React, { useContext } from 'react';
import { CryptoContext } from '../../providers/crypto.provider';
import './TrendSection.scss';
const TrendSection = () => {
  const { cryptos } = useContext(CryptoContext);
  console.log(cryptos);
  return (
    <>
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
                    <span style={{ marginRight: '14px' }}>icon</span>
                    <span className='trend-item-currency'>usd</span>
                  </div>
                  <div>
                    <span>arrow</span>
                    <span className='trend-item-percentage'>percent</span>
                  </div>
                </div>
                <div className='trend-item-price'>{crypto.price.may}</div>
                <div>graph</div>
              </div>
            )
        )}
      </div>
    </>
  );
};
export default TrendSection;

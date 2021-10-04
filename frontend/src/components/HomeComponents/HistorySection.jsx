import React, { useContext } from 'react';
import './HistorySection.scss';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../../providers/crypto.provider';
import { calculatePercent } from '../../utils/cryptoFunctions';
import { StatesContext } from '../../providers/states.provider';
import PopupModal from './PopupModal';
const HistorySection = () => {
  const { trendCrypto } = useContext(CryptoContext);
  const { handlePopup } = useContext(StatesContext);

  return (
    <div style={{ marginRight: '50px' }}>
      <div className='history-title-container'>
        <h3 className='history-title'>History</h3>{' '}
        <div className='history-link-container'>
          <Link to='/' className='history-link' onClick={handlePopup}>
            See all
          </Link>
        </div>
      </div>
      <div className='history-container'>
        {trendCrypto.map((crypto) => (
          <div key={crypto.id} className='history-item-container'>
            <img
              src={crypto.image}
              alt={crypto.name}
              style={{ width: '20px', height: '20px', marginRight: '15px' }}
            />

            <span className='history-item-name'>{crypto.name}</span>
            {calculatePercent(crypto.current_price, crypto.high_24h) > 0 ? (
              <span className='history-item-percent-green'>
                {`${
                  '+' +
                  calculatePercent(
                    crypto.current_price,
                    crypto.high_24h
                  ).toFixed(2)
                } %`}
              </span>
            ) : (
              <span className='history-item-percent-red'>
                {`${calculatePercent(
                  crypto.current_price,
                  crypto.high_24h
                ).toFixed(2)}   %
           `}
              </span>
            )}
            <span className='history-item-time'>
              {new Date(crypto.last_updated).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
      <PopupModal />
    </div>
  );
};

export default HistorySection;

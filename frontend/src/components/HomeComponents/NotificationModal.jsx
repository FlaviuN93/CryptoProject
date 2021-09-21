import React, { useContext } from 'react';
import './NotificationModal.scss';
import Modal from '../SharedComponents/Modal';
import { Avatar } from '@material-ui/core';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../../providers/crypto.provider';
import { StatesContext } from '../../providers/states.provider';
const NotificationModal = () => {
  const { cryptos } = useContext(CryptoContext);
  const { toggleModal, handleModal } = useContext(StatesContext);
  return (
    <>
      <Modal
        show={toggleModal}
        onCancel={handleModal}
        backdropCSS='notification-backdrop'
        header={<h3 className='notification-header'>Notifications</h3>}
        footer={
          <Link to='/notifications' className='notification-footer-link'>
            See all
          </Link>
        }
        footerClass='notification-footer'
        className='notification-modal'
      >
        <div className='notification-body'>
          {cryptos.map(
            (crypto, index) =>
              index <= 3 && (
                <div key={crypto.id} className='notification-item'>
                  <div className='notification-avatar'>
                    <Avatar
                      alt='name'
                      src={crypto.icon}
                      style={{
                        width: '35px',
                        height: '35px',
                        marginTop: '2px',
                      }}
                    />
                  </div>

                  <div className='notification-info'>
                    <div style={{ display: 'flex', marginBottom: '5px' }}>
                      <span className='notification-title'>{crypto.short}</span>
                      <span className='notification-status'>
                        Sent you a coin
                      </span>
                    </div>
                    <div className='notification-message'>
                      Bitcoin has gone up by 40%
                    </div>
                    <div className='notification-link-container'>
                      <div>
                        <span>graph</span>
                        <TrendingDownIcon
                          style={{ color: '#E3507A', fontSize: '17px' }}
                        />
                        <span>percent</span>
                      </div>
                      <Link to='/' className='notification-link'>
                        Trade now
                      </Link>
                    </div>
                    <div className='notification-time'>3 hours ago</div>
                  </div>
                  <div className='notification-dots'></div>
                </div>
              )
          )}{' '}
        </div>
      </Modal>
    </>
  );
};

export default NotificationModal;

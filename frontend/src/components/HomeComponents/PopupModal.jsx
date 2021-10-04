import React, { useContext } from 'react';
import { StatesContext } from '../../providers/states.provider';
import Modal from '../SharedComponents/Modal';
import './PopupModal.scss';

import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@mui/material/Button';

const PopupModal = () => {
  const { popupModal, handlePopup } = useContext(StatesContext);
  return (
    <div>
      <Modal
        show={popupModal}
        onCancel={handlePopup}
        backdropCSS='notification-backdrop'
        header={
          <div className='popup-coin-icon'>
            <img src='/images/icons/PopupIcon.png' alt='popup' />
          </div>
        }
        className='popup-modal'
      >
        <div className='popup-body-container'>
          {' '}
          <IconButton className='popup-close-button' onClick={handlePopup}>
            <CloseIcon className='popup-close-icon' />
          </IconButton>
          <div className='popup-info'>
            You just earn <span className='popup-coin'>0.005</span> BTC
          </div>
          <Link className='popup-link'>See history</Link>
          <Button className='popup-button' onClick={handlePopup}>
            Dismiss
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupModal;

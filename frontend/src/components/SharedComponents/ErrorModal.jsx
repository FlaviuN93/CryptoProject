import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from 'react-bootstrap';
import './ErrorModal.scss';
import Backdrop from './Backdrop';

const ErrorModal = ({ error }) => {
  const [close, setClose] = useState(true);
  const handleClose = () => setClose(false);
  return (
    <>
      {close && <Backdrop onClick={handleClose} />}
      <Modal className='error-modal' show={close} onHide={close}>
        <Modal.Header className='modal__header'>
          <Modal.Title className='modal__title'>{error.status}</Modal.Title>
          <IconButton className='close-button' onClick={handleClose}>
            <CloseIcon className='close-icon' />
          </IconButton>
        </Modal.Header>
        <Modal.Body>
          <h2 className='modal__h2'>Ooops!</h2>
          <p className='modal__p'>Something went wrong. {error.message}</p>

          <div style={{ textAlign: 'center' }}>
            <Button
              style={{
                color: '#444444',
                width: '15rem',
                height: '3rem',
                marginBottom: '1rem',
              }}
              variant='outlined'
              color='secondary'
              onClick={() => setClose(false)}
            >
              Try Again
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ErrorModal;

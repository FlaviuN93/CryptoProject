import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import './ErrorModal.scss';

const ErrorModal = ({ error }) => {
  const [close, setClose] = useState(true);

  return (
    <div
      className={`${close ? 'backdrop' : ''}`}
      onClick={() => setClose(false)}
    >
      <Modal className='error-modal' show={close} onHide={() => setClose(true)}>
        <Modal.Header className='modal__header'>
          <Modal.Title className='modal__title'>{error.status}</Modal.Title>
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
              className='modal__button'
              onClick={() => setClose(false)}
            >
              Try Again
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ErrorModal;

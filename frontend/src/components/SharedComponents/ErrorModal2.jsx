import React, { useContext, useState } from 'react';
import Modal from '../SharedComponents/Modal';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './ErrorModal2.scss';
const ErrorModal2 = ({ error }) => {
  const [close, setClose] = useState(true);
  const handleClose = () => setClose(!close);

  console.log(close, error);
  return (
    <Modal
      show={close}
      onCancel={handleClose}
      className='error-modal'
      headerClass={'error-header'}
      header={
        <>
          <h3 className='error-header-title'>{error.status}</h3>
          <IconButton className='error-close-button' onClick={handleClose}>
            <CloseIcon className='error-close-icon' />
          </IconButton>
        </>
      }
    >
      <h2 className='error-main-title'>Ooops!</h2>
      <p className='error-parag'>Something went wrong. {error.message}</p>

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
          onClick={handleClose}
        >
          Try Again
        </Button>
      </div>
    </Modal>
  );
};

export default ErrorModal2;

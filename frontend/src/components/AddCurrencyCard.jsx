import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'antd/lib/modal/Modal';

const useStyles = makeStyles({
  button: {
    border: '2px dashed #E2E2E8',
    width: '14rem',
    height: '6rem',
    fontSize: '.75rem',
    borderRadius: '14px',
    color: '#D1D1D7',
  },
});
const AddCurrencyCard = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 250);
  };

  const handleCancel = () => setVisible(false);

  const classes = useStyles();
  return (
    <>
      <Button
        startIcon={<AddIcon />}
        className={classes.button}
        onClick={showModal}
      >
        Add Currency
      </Button>{' '}
      <Modal
        title='Title'
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>SelectFields</p>
      </Modal>
    </>
  );
};

export default AddCurrencyCard;

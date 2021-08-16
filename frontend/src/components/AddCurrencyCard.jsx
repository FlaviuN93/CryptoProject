import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'antd/lib/modal/Modal';
import { Select } from 'antd';
import { useHttpClient } from '../shared/http-hook';
import LoadingSpinner from './LoadingSpinner';
import ErrorModal from './ErrorModal';
import CurrencyCard from './CurrencyCard';
const { Option } = Select;

const useStyles = makeStyles((theme) => ({
  button: {
    border: '2px dashed #E2E2E8',
    width: '14rem',
    height: '6rem',
    fontSize: '.75rem',
    borderRadius: '14px',
    color: '#D1D1D7',
    [theme.breakpoints.down('xs')]: {
      width: '11rem',
      height: '5rem',
      fontSize: '.7rem',
    },
  },
}));
const AddCurrencyCard = () => {
  const [visible, setVisible] = useState(false);
  const { error, isLoading, sendRequest } = useHttpClient();
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const getAllCrypto = async () => {
      try {
        const { data } = await sendRequest(
          'http://localhost:5000/api/v1/crypto'
        );
        setCryptos(data.cryptos);
      } catch (err) {}
    };

    getAllCrypto();
  }, [sendRequest]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    console.log(values);
    const getCryptoByName = async () => {
      try {
        const { data } = await sendRequest(
          'http://localhost:5000/api/v1/crypto/:name',
          'POST',
          JSON.stringify(values),
          { 'Content-Type': 'application/json' }
        );
        setSelectedCrypto(data.selectedCrypto);
      } catch (err) {}
    };
    getCryptoByName();
    setVisible(false);
  };

  const handleDeselect = (event) => {
    console.log(event.type);
    if (event.type === 'click') {
      setValues();
    }
    setValues(values.filter((crypto) => crypto !== event));
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const classes = useStyles();

  return (
    <>
      {' '}
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorModal error={error} />
      ) : (
        selectedCrypto.map((crypto) => (
          <CurrencyCard key={crypto.id} {...crypto} />
        ))
      )}
      <Button
        startIcon={<AddIcon style={{ width: '1.5rem' }} />}
        className={classes.button}
        onClick={showModal}
      >
        Add Currency
      </Button>{' '}
      <Modal
        title='Crypto Wallet'
        visible={visible}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {error ? <ErrorModal error={error} /> : null}

            <Select
              mode='multiple'
              style={{ width: '75%' }}
              placeholder='Select Currency'
              optionLabelProp='label'
              onSelect={(event) => setValues([...values, event])}
              onDeselect={handleDeselect}
            >
              {cryptos.map((crypto) => (
                <Option value={crypto.name} key={crypto.id}>
                  <div className='crypto-name'>
                    <img
                      src={crypto.icon}
                      alt={crypto.short}
                      style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '4px',
                      }}
                    />
                    {crypto.name}

                    <span
                      style={{ fontWeight: '500', marginLeft: '4px' }}
                      aria-label='Bitcoin'
                    >
                      ({crypto.short})
                    </span>
                  </div>
                </Option>
              ))}
            </Select>
          </>
        )}
        <Button
          color='primary'
          variant='outlined'
          style={{
            padding: '3px 4px',
            marginBottom: '5px',
            marginLeft: '10px',
          }}
          onClick={handleDeselect}
        >
          Clear All
        </Button>
      </Modal>
    </>
  );
};

export default AddCurrencyCard;

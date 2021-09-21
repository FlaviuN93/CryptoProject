import React, { useState, useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'antd/lib/modal/Modal';
import LoadingSpinner from '../SharedComponents/LoadingSpinner';
import ErrorModal from '../SharedComponents/ErrorModal';
import CurrencyCard from './CurrencyCard';
import { CryptoContext } from '../../providers/crypto.provider';
import { Select } from 'antd';
const { Option } = Select;

const useStyles = makeStyles((theme) => ({
  button: {
    border: '2px dashed #E2E2E8',
    width: '12rem',
    height: '4.75rem',
    borderRadius: '14px',
    fontWeight: '700',
    marginLeft: '20px',
    color: '#D1D1D7',
    [theme.breakpoints.down('md')]: {
      width: '11rem',
      height: '4.75rem',
    },
  },
}));
const AddCurrencyCard = () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);
  const { isLoading, error, cryptos, getCryptoByName, selectedCrypto } =
    useContext(CryptoContext);

  const showModal = () => setVisible(true);

  const handleOk = () => {
    console.log(values);
    getCryptoByName(values);
    setVisible(false);
  };

  const handleDeselect = (event) =>
    setValues(values.filter((crypto) => crypto !== event));

  const handleCancel = () => setVisible(false);

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
              value={values}
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
          onClick={() => setValues([])}
        >
          Clear All
        </Button>
      </Modal>
    </>
  );
};

export default AddCurrencyCard;

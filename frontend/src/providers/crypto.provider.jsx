import React, { useState, createContext, useEffect, useContext } from 'react';

import { useHttpClient } from '../shared/hooks/http-hook';
import { UserContext } from './user.provider';

export const CryptoContext = createContext({});

const selectCryptoFromStorage =
  JSON.parse(localStorage.getItem('selectedCrypto')) || [];

const CryptoProvider = ({ children }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [cryptos, setCryptos] = useState([]);
  const { userInfo } = useContext(UserContext);
  const [selectedCrypto, setSelectedCrypto] = useState(selectCryptoFromStorage);

  useEffect(() => {
    localStorage.setItem('selectedCrypto', JSON.stringify(selectedCrypto));
  }, [selectedCrypto]);

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

  const getCryptoByName = async (values) => {
    try {
      const { data } = await sendRequest(
        'http://localhost:5000/api/v1/crypto/:name',
        'POST',
        JSON.stringify(values),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + userInfo.token,
        }
      );
      console.log(data);
      setSelectedCrypto(data.selectedCrypto);
    } catch (err) {}
  };
  return (
    <CryptoContext.Provider
      value={{
        getCryptoByName,
        cryptos,
        selectedCrypto,
        isLoading,
        error,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;

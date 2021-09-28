import React, { useState, createContext, useEffect, useContext } from 'react';

import { useHttpClient } from '../shared/hooks/http-hook';
import { UserContext } from './user.provider';

export const CryptoContext = createContext({});

const selectCryptoFromStorage =
  JSON.parse(localStorage.getItem('selectedCrypto')) || [];

const CryptoProvider = ({ children }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const { userInfo } = useContext(UserContext);
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(selectCryptoFromStorage);
  const [trendCrypto, setTrendCrypto] = useState([]);

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

  useEffect(() => {
    const trendCrypto = async () => {
      try {
        const { data } = await sendRequest(
          'http://localhost:5000/api/v1/crypto/trend'
        );
        setTrendCrypto(data.trendingCrypto.data);
      } catch (err) {}
    };
    trendCrypto();
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

      setSelectedCrypto(data.selectedCrypto);
    } catch (err) {}
  };

  return (
    <CryptoContext.Provider
      value={{
        getCryptoByName,
        cryptos,
        selectedCrypto,
        trendCrypto,
        isLoading,
        error,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;

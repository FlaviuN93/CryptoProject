import React from 'react';
import AddCurrencyCard from './AddCurrencyCard';
import CurrencyCard from './CurrencyCard';

const CurrencyList = () => {
  return (
    <div>
      <CurrencyCard />
      <AddCurrencyCard />
    </div>
  );
};

export default CurrencyList;

import React, { useState, createContext } from 'react';

export const StatesContext = createContext({
  toggleModal: false,
  handleModal: () => {},
});

const StatesProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleModal = () => setToggleModal(!toggleModal);
  return (
    <StatesContext.Provider
      value={{
        toggleModal,
        setToggleModal,
        handleModal,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;

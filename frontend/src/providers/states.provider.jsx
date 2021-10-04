import React, { useState, createContext } from 'react';

export const StatesContext = createContext({
  toggleModal: false,
  popupModal: false,
  handlePopup: () => {},
  handleModal: () => {},
});

const StatesProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [popupModal, setPopupModal] = useState(false);
  const handlePopup = () => setPopupModal(!popupModal);
  const handleModal = () => setToggleModal(!toggleModal);
  return (
    <StatesContext.Provider
      value={{
        toggleModal,
        handleModal,
        popupModal,
        handlePopup,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;

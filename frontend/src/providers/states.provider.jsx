import React, { useState, createContext, useEffect, useCallback } from 'react';

export const StatesContext = createContext({
  toggleModal: false,
  popupModal: false,
  handlePopup: () => {},
  handleModal: () => {},
});
let rootElem = document.getElementById('root');

const StatesProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [popupModal, setPopupModal] = useState(false);
  const handlePopup = useCallback(
    () => setPopupModal(!popupModal),
    [popupModal]
  );
  const handleModal = useCallback(
    () => setToggleModal(!toggleModal),
    [toggleModal]
  );
  // console.log(toggleModal);
  useEffect(() => {
    if (toggleModal === true)
      // if I don't remove the event after addEvent the modal doesn't work properly
      // but why doesn't it work without a function returned
      rootElem.addEventListener('click', handleModal, false);
    return () => rootElem.removeEventListener('click', handleModal);
  }, [toggleModal, handleModal]);

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

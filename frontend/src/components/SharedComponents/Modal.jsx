import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <header className={`modal-header ${props.headerClass}`}>
        {props.header}
      </header>
      <main className={`modal-main ${props.bodyClass}`}>{props.children}</main>{' '}
      <footer className={`modal-footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-root'));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && (
        <Backdrop className={props.backdropCSS} onClick={props.onCancel} />
      )}
      <CSSTransition
        in={props.show}
        timeout={{ exit: 300, appear: 500, enter: 300 }}
        appear={props.show}
        classNames='modal-animation'
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;

import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';

type TModalProps = {
  children: JSX.Element;
};

const Modal: FC<TModalProps> = ({ children }) => {
  const portalDiv = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <ModalOverlay>
      {children}
    </ModalOverlay>,
    portalDiv!
  );
};

export default Modal;

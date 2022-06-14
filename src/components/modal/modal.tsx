/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';

// Styles 
import styles from './modal.module.scss';

type TModalProps = {
  children: JSX.Element;
};

const Modal: FC<TModalProps> = ({ children }) => {
  const portalDiv = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={`${styles.wrapper}`}>
        {children}
      </div>
    </ModalOverlay>,
    portalDiv!
  );
};

export default Modal;

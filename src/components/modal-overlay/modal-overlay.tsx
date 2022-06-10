import React, { FC } from 'react';

// Styles
import styles from './modal-overlay.module.scss';

type TModalOverlayProps = {
  children: JSX.Element;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ children }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {children}
    </div>
  );
};

export default ModalOverlay;

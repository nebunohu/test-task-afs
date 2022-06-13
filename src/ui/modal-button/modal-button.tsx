import React, { FC } from 'react';

// Styles
import styles from './modal-button.module.scss';

type TModalButtomProps = {
  type: 'confirm' | 'decline';
  onClick?: (e: React.MouseEvent) => void;
  value: string;
};

const ModalButton: FC<TModalButtomProps> = ({ type, value, onClick}) => {
  let buttonColor = '';
  switch (type) {
    case 'confirm':
      buttonColor = styles.accept;
      break;
    default:
      buttonColor = styles.decline; 
  }
  return (
    <button
      className={`${styles.modalButton} ${buttonColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ModalButton;
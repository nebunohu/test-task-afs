import React, { FC, MouseEvent } from 'react';
import { closeModal } from '../../redux/actions/app-actions';
import { useAppDispatch } from '../../services/hooks';

// Styles
import styles from './modal-overlay.module.scss';

type TModalOverlayProps = {
  children: JSX.Element;
};

const ModalOverlay: FC<TModalOverlayProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) dispatch(closeModal());
  };

  return (
    <div
      className={`${styles.wrapper}`}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;

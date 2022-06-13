import React from 'react';
import LinkedIcon from '../../ui/linked-icon/linked-icon';
import RotationIcon from '../../ui/rotation-icon/rotation-icon';
import TrashIcon from '../../ui/trash-icon/trash-icon';
import arrow from '../../images/back-arrow.svg';

import { setIsDeleteModal } from '../../redux/actions/app-actions';

// Styles
import styles from './header.module.scss';
import { useAppDispatch } from '../../services/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const onDeleteClickHandler = () => {
    dispatch(setIsDeleteModal());
  };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.backWrapper}`}>
        <img className={`${styles.arrow}`} src={arrow} alt="" />
        К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
      </div>
      <div className={`${styles.headerControls}`}>
        <div className={`${styles.controlElement}`}>
          <LinkedIcon />
        </div>
        <div className={`${styles.controlElement}`}>
          <RotationIcon />
        </div>
        <div className={`${styles.controlElement}`} onClick={onDeleteClickHandler}>
          <TrashIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import LinkedIcon from '../../ui/linked-icon/linked-icon';
import TrashIcon from '../../ui/rotation-icon/rotation-icon';
import RotationIcon from '../../ui/trash-icon/trash-icon';
import arrow from '../../images/back-arrow.svg';

// Styles
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div>
        <img src={arrow} alt="" />
        К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
      </div>
      <div className={`${styles.headerControls}`}>
        <div className={`${styles.controlElement}`}>
          <LinkedIcon />
        </div>
        <div className={`${styles.controlElement}`}>
          <RotationIcon />
        </div>
        <div className={`${styles.controlElement}`}>
          <TrashIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

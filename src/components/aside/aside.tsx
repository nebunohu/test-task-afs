import React, { FC } from 'react';

// Stylrs
import styles from './aside.module.scss';

import home from '../../images/home.svg';
import market from '../../images/market.svg';
import search from '../../images/Search.svg';
import chat from '../../images/Chat.svg';
import exit from '../../images/Exit.svg';
import settings from '../../images/Settings.svg';
import BuildingIcon from '../../ui/building-icon/building-icon';

const Aside: FC = () => {
  return (
    <aside className={`${styles.leftSection}`}>
      <div  className={`${styles.navWrapper}`}>
        <nav className={`${styles.navigation}`}>
          <div className={`${styles.navTop}`}>
            <div className={`${styles.navElement}`}>
              <img src={home} alt="" />
            </div>
            <div className={`${styles.navElement} ${styles.active}`}>
              <img src={market} alt="" />
            </div>
            <div className={`${styles.navElement}`}>
              <img src={search} alt="" />
            </div>
          </div>
          <div className={`${styles.navBot}`}>
            <div className={`${styles.navElement}`}>
              <img src={settings} alt="" />
            </div>
            <div className={`${styles.navElement}`}>
              <img src={chat} alt="" />
            </div>
            <div className={`${styles.navElement}`}>
              <img src={exit} alt="" />
            </div>     
          </div>
        </nav>
      </div>
      <div className={`${styles.menu}`}>
        <div className={`${styles.gradient}`} />
        <div className={`${styles.logoPlace}`}>
          <span className={`${styles.title}`}>ЧЕСТНЫЙ АГЕНТ</span>
          <span className={`${styles.subTitle}`}>МЕНЕДЖЕР ПРОЦЕССА</span>
        </div>
        <div className={`${styles.organizations}`}>
          <BuildingIcon />
          Организации
        </div>
      </div>
    </aside>
  )
};

export default Aside;

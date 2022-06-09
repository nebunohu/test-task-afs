import React, { useEffect } from 'react';
import { companyId } from '../../consts';
import { getCompanyThunk } from '../../redux/actions/company-actions';
import { useAppDispatch } from '../../services/hooks';
import CommonInformation from '../common-information/common-information';
import Contacts from '../contacts/contacts';
import PhotosSection from '../photos-section/photos-section';

//Styles
import styles from './app.module.scss';

import arrow from '../../images/back-arrow.svg';
import home from '../../images/home.svg';
import market from '../../images/market.svg';
import search from '../../images/Search.svg';
import chat from '../../images/Chat.svg';
import exit from '../../images/Exit.svg';
import settings from '../../images/Settings.svg'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompanyThunk(companyId));
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <main>
        <aside className={`${styles.leftSection}`}>
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
          <div className={`${styles.menu}`}>
            <div className={`${styles.gradient}`} />
            <div className={`${styles.logoPlace}`}>
              <span className={`${styles.title}`}>ЧЕСТНЫЙ АГЕНТ</span>
              <span className={`${styles.subTitle}`}>МЕНЕДЖЕР ПРОЦЕССА</span>
            </div>
            <div className={`${styles.organizations}`}>
              Организации
            </div>
          </div>
        </aside>
        <div className={`${styles.contentWrapper}`}>
          <header className={`${styles.header}`}>
            <div>
              <img src={arrow} alt="" />
              К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
            </div>
            <div>

            </div>
          </header>
          <div className={`${styles.information}`}>
            <h1>Перспективные захоронения</h1>
            <CommonInformation />
            <Contacts />
            <PhotosSection />
          </div>
        </div>
      </main>
      <footer>
        <span>© 1992 - 2020 Честный Агент © Все права защищены.</span>
        <span>8 (495) 150-21-12</span>
      </footer>
    </div>
  );
}

export default App;

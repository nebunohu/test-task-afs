import React, { useEffect } from 'react';
import { companyId } from '../../consts';
import { getCompanyThunk } from '../../redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import CommonInformation from '../common-information/common-information';
import Contacts from '../contacts/contacts';
import PhotosSection from '../photos-section/photos-section';

//Styles
import styles from './app.module.scss';

import Header from '../header/header';
import Aside from '../aside/aside';
import DeleteModal from '../delete-modal/delete-modal';
import ShortNameSection from '../short-name-section/short-name-section';

function App() {
  const dispatch = useAppDispatch();
  const { isDeleteModal } = useAppSelector((store) => store.appState);

  useEffect(() => {
    dispatch(getCompanyThunk(companyId));
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <main>
        <Aside />
        <div className={`${styles.contentWrapper}`}>
          <Header />
          <div className={`${styles.information}`}>
            <ShortNameSection />
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
      {isDeleteModal && <DeleteModal />}
      {/* {isEditModal && <EditModal />} */}
    </div>
  );
}

export default App;

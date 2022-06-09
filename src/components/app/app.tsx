import React, { useEffect } from 'react';
import { companyId } from '../../consts';
import { getCompanyThunk } from '../../redux/actions/company-actions';
import { useAppDispatch } from '../../services/hooks';
import CommonInformation from '../common-information/common-information';
import Contacts from '../contacts/contacts';
import Photos from '../photos/photos';
import styles from './app.module.scss';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCompanyThunk(companyId));
  }, []);
  return (
    <div className={`${styles.wrapper}`}>
      <main>
        <aside>
          <nav>

          </nav>
        </aside>
        <div className={`${styles.contentWrapper}`}>
          <header>

          </header>
          <div>
            <CommonInformation />
            <Contacts />
            <Photos />
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;

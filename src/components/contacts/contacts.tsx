import React, { FC, useEffect } from 'react';
import { getContactThunk } from '../../redux/actions/contact-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import InformationBlock from '../information-block/information-block';
import SectionHeader from '../section-header/section-header';

// Styles
import styles from './contacts.module.scss'; 

const Contacts: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  const { contact } = useAppSelector((store) => store.contactState);
  const dispatch = useAppDispatch();
  const infoArray = contact ? [
    {
      title: 'ФИО:',
      value: `${contact.lastname} ${contact.firstname} ${contact.patronymic}`,
    },
    {
      title: 'Телефон:',
      value: `${contact.phone}`,
    },
    {
      title: 'Эл. почта:',
      value: <div className={`${styles.email}`}>{contact.email}</div>,
    },
  ] : [];

  useEffect(() => {
    if (company) dispatch(getContactThunk(company.contactId))
  }, [company]);

  if (!contact) return null;
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader value="Контактные данные" edit />
      <InformationBlock infoArray={infoArray} />
    </section>
  );
};

export default Contacts;

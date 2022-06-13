import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { closeModal, setIsEditContactsModal } from '../../redux/actions/app-actions';
import { getContactThunk, saveContacts } from '../../redux/actions/contact-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import EditModal from '../edit-modal/edit-modal';
import InformationBlock from '../information-block/information-block';
import SectionHeader from '../section-header/section-header';

// Styles
import styles from './contacts.module.scss';

type TFormState = {
  [name: string]: string;
};

const Contacts: FC = () => {
  const title = 'Контактные данные';
  const { company } = useAppSelector((store) => store.companyState);
  const { contact } = useAppSelector((store) => store.contactState);
  const isModalOpen = useAppSelector((store) => store.appState.isEditContactsModal);
  const dispatch = useAppDispatch();
  const infoArray = contact ? [
    {
      title: 'ФИО:',
      value: `${contact.lastname} ${contact.firstname} ${contact.patronymic}`,
      id: 'contact',
    },
    {
      title: 'Телефон:',
      value: `${contact.phone}`,
      id: 'phone',
    },
    {
      title: 'Эл. почта:',
      value: <div className={`${styles.email}`}>{contact.email}</div>,
      id: 'email',
    },
  ] : [];
  const [formState, setFormState] = useState<TFormState | null>(null);

  const onEditClick = () => {
    dispatch(setIsEditContactsModal());
  };

  const onFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState({ ...formState, [name]: value });
  };

  const onSaveClick = () => {
    if (!formState) return;

    const formToSave: any = {};
    const formStateKeys = Object.keys({ ...formState });
    for (let i = 0; i < formStateKeys.length; i++) {
      if (formStateKeys[i] === 'contact') {
        const splitedContact =  formState[formStateKeys[i]].split(' ');
        formToSave['lastname'] = splitedContact[0];
        formToSave['firstname'] = splitedContact[1];
        formToSave['patronymic'] = splitedContact[2];
      } else {
        formToSave[formStateKeys[i]] = formState[formStateKeys[i]];
      }
    }

    setFormState(null);
    dispatch(saveContacts(formToSave));
    dispatch(closeModal());
  };

  const onCancelClick = () => dispatch(closeModal());

  useEffect(() => {
    if (contact && !formState) setFormState(infoArray.reduce((acc, el) => {
      if (typeof el.value === 'object') {
        return { ...acc, [el.id]: el.value.props.children }
      }
      return { ...acc, [el.id]: el.value }}, {}));
  }, [contact])

  useEffect(() => {
    if (company) dispatch(getContactThunk(company.contactId))
  }, [company]);

  if (!contact) return null;
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader value={title} onEditClick={onEditClick} edit />
      <InformationBlock infoArray={infoArray} />
      {isModalOpen && formState && (
        <EditModal
          title={title}
          info={infoArray}
          formState={formState}
          onFormInputChange={onFormInputChange}
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
        />
      )}
    </section>
  );
};

export default Contacts;

import React, { FC, useEffect } from 'react';
import { getContactThunk } from '../../redux/actions/contact-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';

const Contacts: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  const { contact } = useAppSelector((store) => store.contactState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (company) dispatch(getContactThunk(company.contactId))
  }, [company]);

  if (!contact) return null;
  return (
    <section>
      <h2>Контактные данные</h2>
      <div>
        <div>
          <div>
            ФИО:
          </div>
          <div>
            {contact.firstname} {contact.lastname} 
          </div>
          <div>
            Телефон:
          </div>
          <div>
            {contact.phone}
          </div>
          <div>
            Эл. почта:
          </div>
          <div>
            {contact.email}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

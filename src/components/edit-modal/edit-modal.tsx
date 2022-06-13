import React, { FC } from 'react';
import { closeModal } from '../../redux/actions/app-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import ModalButton from '../../ui/modal-button/modal-button';
import deleteCompny from '../../utils/deleteCompany';
import FormInput from '../form-input/form-input';
import Modal from '../modal/modal';

// Styles
import styles from './edit-modal.module.scss';

type TEditModalProps = {
  title: string;
  info: any;
  formState: any;
  onFormInputChange: any;
  onSaveClick: any,
  onCancelClick: any;
};

const EditModal: FC<TEditModalProps> = ({
  title,
  info,
  formState,
  onFormInputChange,
  onSaveClick,
  onCancelClick,
}) => {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);

  const onDeleteClickHandler = () => {
    if (company) deleteCompny(company.id);
    dispatch(closeModal());
  };

  return (
    <Modal>
          <div className={`${styles.modalWrapper}`}>
            <h1>{title}</h1>
            <form>
              {info.map((el: any) => {
                return (
                  <FormInput 
                    id={el.id}
                    inputLabel={el.title}
                    onChange={onFormInputChange}
                    value={formState[el.id]}
                    key={el.id}
                  />
                )
              })}
              
            </form>
            <div className={`${styles.modalActions}`}>
              <ModalButton type="decline" value="ОТМЕНА" onClick={onCancelClick} />
              <ModalButton type="confirm" value="СОХРАНИТЬ" onClick={onSaveClick} />
            </div>
            
          </div>
        </Modal>
  );
};

export default EditModal;

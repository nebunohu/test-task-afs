import React, { ChangeEvent, FC, MouseEvent } from 'react';
import ModalButton from '../../ui/modal-button/modal-button';
import FormInput from '../form-input/form-input';
import Modal from '../modal/modal';

// Styles
import styles from './edit-modal.module.scss';

type TEditModalProps = {
  title: string;
  info: any;
  formState: any;
  onFormInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSaveClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onCancelClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const EditModal: FC<TEditModalProps> = ({
  title,
  info,
  formState,
  onFormInputChange,
  onSaveClick,
  onCancelClick,
}) => {

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
              <ModalButton actionType="decline" value="ОТМЕНА" onClick={onCancelClick} />
              <ModalButton actionType="confirm" value="СОХРАНИТЬ" onClick={onSaveClick} />
            </div>
            
          </div>
        </Modal>
  );
};

export default EditModal;

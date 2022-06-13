import React, { FC } from 'react';
import { deletePhotoThunk, saveNewPhotosArray } from '../../redux/actions/company-actions';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { TPhoto } from '../../types';
import CloseIcon from '../../ui/close-icon/close-icon';

// Styles
import styles from './photo.module.scss';

type TPhotoProps = {
  photo: TPhoto;
}

const Photo: FC<TPhotoProps> = ({ photo }) => {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((store) => store.companyState);

  if (!company) return null;

  const onDeleteClick = () => {
    dispatch(deletePhotoThunk(company.id, photo.name));
    const photos = [...company.photos];
    const deletePhotoIndex = photos.findIndex((el: TPhoto) => photo.name === el.name);
    photos.splice(deletePhotoIndex, 1);
    dispatch(saveNewPhotosArray(photos));
  };

  return (
    <div className={`${styles.wrapper}`}>
      <img src={photo.thumbpath} alt='' />
      <div
        className={`${styles.iconWrapper}`}
        onClick={onDeleteClick}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default Photo;

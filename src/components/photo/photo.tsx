import React, { FC } from 'react';
import { TPhoto } from '../../types';
import CloseIcon from '../../ui/close-icon/close-icon';

// Styles
import styles from './photo.module.scss';

type TPhotoProps = {
  photo: TPhoto;
}

const Photo: FC<TPhotoProps> = ({ photo }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <img src={photo.thumbpath} alt='' />
      <div  className={`${styles.iconWrapper}`}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Photo;

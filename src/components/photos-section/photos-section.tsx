import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import { TPhoto } from '../../types';
import Button from '../../ui/button/button';
import PlusIcon from '../../ui/plus-icon/plus-icon';
import Photo from '../photo/photo';
import SectionHeader from '../section-header/section-header';

// Styles
import styles from './photos-section.module.scss';

const PhotosSection: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  if (!company) return null;
  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader value="Приложенные фото" />
      <div className={`${styles.photosWrapper}`}>
        {company?.photos.map((photo: TPhoto, index: number) => <Photo photo={photo} key={index} />)}
      </div>
      <Button icon={<PlusIcon />}>
        Добавить изображение
      </Button>
    </section>
  );
};

export default PhotosSection;

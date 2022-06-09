import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import Button from '../../ui/button/button';
import PlusIcon from '../../ui/plus-icon/plus-icon';
import Photo from '../photo/photo';

const PhotosSection: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  if (!company) return null;
  return (
    <section>
      <h2>Приложенные фото</h2>
      <div>
        {company?.photos.map((photo, index) => <Photo photo={photo} key={index} />)}
      </div>
      <Button icon={<PlusIcon />}>
        Добавить изображение
      </Button>
    </section>
  );
};

export default PhotosSection;

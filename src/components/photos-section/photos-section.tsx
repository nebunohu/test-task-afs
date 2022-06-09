import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
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
    </section>
  );
};

export default PhotosSection;

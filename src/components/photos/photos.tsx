import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';

const Photos: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  if (!company) return null;
  return (
    <section>
      <h2>Приложенные фото</h2>
      <div>
        {company?.photos.map((photo, index) => <img src={photo.thumbpath} alt='' key={index} />)}
      </div>
    </section>
  );
};

export default Photos;

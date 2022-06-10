import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import InformationBlock from '../information-block/information-block';
import SectionHeader from '../section-header/section-header';

// Styles
import styles from './common-information.module.scss';

const CommonInformation: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  const info = company ? [
    {
      title: 'Полное название:',
      value: company.name,
    },
    {
      title: 'Договор:',
      value: `${company.contract.no} от ${company.contract.issue_date}`,
    },
    {
      title: 'Форма:',
      value: company.businessEntity,
    },
    {
      title: 'Тип:',
      value: company.type.reduce((acc, el) => acc + el),
    },
  ] : [];

  if (!company) return null;

  return (
    <section className={`${styles.wrapper}`}>
      <SectionHeader value="Общая информация" edit />
      <InformationBlock infoArray={info} />
    </section>
  );
};

export default CommonInformation;

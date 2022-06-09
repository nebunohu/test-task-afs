import React, { FC } from 'react';
import { useAppSelector } from '../../services/hooks';

const CommonInformation: FC = () => {
  const { company } = useAppSelector((store) => store.companyState);
  if (!company) return null;
  return (
    <section>
      <h2>Общая информация</h2>
      <div>
        <div>
          <div>
            Полное название:
          </div>
          <div>
            {company.name}
          </div>
          <div>
            Договор:
          </div>
          <div>
            {company.contract.no} от {company.contract.issue_date}
          </div>
          <div>
            Форма:
          </div>
          <div>
            {company.businessEntity}
          </div>
          <div>
            Тип:
          </div>
          <div>
            {company.type}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonInformation;

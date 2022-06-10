import React, { FC } from 'react';
import EditIcon from '../../ui/edit-icon/edit-icon';

// Styles
import styles from './section-header.module.scss';

type TSectionHeaderProps = {
  value: string;
  edit?: boolean;
};

const SectionHeader: FC<TSectionHeaderProps> = ({ value, edit }) => {
  return (
    <div className={`${styles.headerWrapper}`}>
      <h2>{value}</h2>
      {edit && <div className={`${styles.iconWrapper}`}>
        <EditIcon />
      </div>}
    </div>
  );
};

export default SectionHeader;

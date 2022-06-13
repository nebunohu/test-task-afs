import React, { FC } from 'react';
import EditIcon from '../../ui/edit-icon/edit-icon';

// Styles
import styles from './section-header.module.scss';

type TSectionHeaderProps = {
  value: string;
  edit?: boolean;
  onEditClick?: () => void;
};

const SectionHeader: FC<TSectionHeaderProps> = ({ value, edit, onEditClick }) => {
  return (
    <div className={`${styles.headerWrapper}`}>
      <h2>{value}</h2>
      {edit && (
        <div
          className={`${styles.iconWrapper}`}
          onClick = {onEditClick}
        >
          <EditIcon />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

import React, { FC } from 'react';

// Styles
import styles from './section-block.module.scss';

type TInformationBlockProps = {
  infoArray: Array<{
    title: string;
    value: string;
  }>;
}

const InformationBlock: FC<TInformationBlockProps> = ({ infoArray }) => {
  return (
    <div className={`${styles.infoWrapper}`}>
      {infoArray.map((el, index) => {
        return (
          <>
            <div className={`${styles.itemTitle}`}>
              {el.title}
            </div>
            <div className={`${styles.itemValue}`}>
              {el.value}
            </div>
          </>
        )
      })}
    </div>
  );
};

export default InformationBlock;
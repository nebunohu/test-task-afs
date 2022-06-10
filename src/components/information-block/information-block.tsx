import React, { FC, Fragment } from 'react';

// Styles
import styles from './section-block.module.scss';

type TInformationBlockProps = {
  infoArray: Array<{
    title: string;
    value: string | JSX.Element;
  }>;
}

const InformationBlock: FC<TInformationBlockProps> = ({ infoArray }) => {
  return (
    <div className={`${styles.infoWrapper}`}>
      {infoArray.map((el, index) => {
        return (
          <Fragment key={index+1}>
            <div className={`${styles.itemTitle}`}>
              {el.title}
            </div>
            <div className={`${styles.itemValue}`}>
              {el.value}
            </div>
          </Fragment>
        )
      })}
    </div>
  );
};

export default InformationBlock;
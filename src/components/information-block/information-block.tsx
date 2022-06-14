import phoneFormatter from 'phone-formatter';
import React, { FC, Fragment } from 'react';

// Styles
import styles from './section-block.module.scss';

type TInformationBlockProps = {
  infoArray: Array<{
    title: string;
    value: string | JSX.Element;
    id: string;
  }>;
}

const InformationBlock: FC<TInformationBlockProps> = ({ infoArray }) => {
  return (
    <div className={`${styles.infoWrapper}`}>
      {infoArray.map((el) => {
        if (el.id === 'phone') {
          let phone;
          if (typeof el.value === 'string') {
            phone = phoneFormatter.format(el.value, '+7 (NNN) NNN-NN-NN');
          }

          return (
            <Fragment key={el.id}>
              <div className={`${styles.itemTitle}`}>
                {el.title}
              </div>
              <div className={`${styles.itemValue}`}>
                {phone}
              </div>
            </Fragment>
          )
        }
        return (
          <Fragment key={el.id}>
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
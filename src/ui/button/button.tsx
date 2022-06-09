import React, { FC } from 'react';

// Stylуs
import styles from './button.module.scss';

type TButtonProps = {
  children?: JSX.Element | string;
  icon?: JSX.Element;
  onClick?: (e: React.MouseEvent) => void
};

const Button: FC<TButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button
      className={`${styles.wrapper}`}
      onClick={(e) => (typeof onClick === 'function') ? onClick(e) : null}
    >
      {!!icon && (
        <div className={`${styles.iconWrapper}`}>
          {icon}
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
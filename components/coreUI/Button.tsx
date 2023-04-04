import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from '@/styles/coreUI/Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

export const Button: FC<Props> = ({ label, onClick, active, children }) => {
  return (
    <button
      className={active ? styles.button_active : styles.button}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export const ButtonText: FC<Props> = ({ label, onClick, children }) => {
  return (
    <button className={styles.button_text} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

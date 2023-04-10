import { ButtonHTMLAttributes, MouseEvent, FC, ReactNode } from 'react';
import styles from '@/styles/coreUI/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  active?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLElement>) => void);
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ label, onClick, active, children }) => {
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

export const ButtonText: FC<ButtonProps> = ({ label, onClick, children }) => {
  return (
    <button className={styles.button_text} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

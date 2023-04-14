import { ButtonHTMLAttributes, MouseEvent, FC, ReactNode } from 'react';
import styles from '@/styles/coreUI/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  active?: boolean;
  onClick?: () => void | ((event: MouseEvent<HTMLElement>) => void);
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ label, onClick, active, children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`${active ? styles.button_active : styles.button} ${disabled && styles.disabled}`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export const ButtonText: FC<ButtonProps> = ({ label, onClick, children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? styles.text_disabled : styles.button_text}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

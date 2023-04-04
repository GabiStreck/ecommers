import { FC,ReactNode, RefObject } from 'react';

import styles from '@/styles/coreUI/IconButton.module.css';

interface Props {
  action: (e: any) => any;
  title?: string;
  children?: ReactNode;
  variant?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
}

export const IconButton: FC<Props> = ({
  children,
  action,
  buttonRef = null,
  title,
}) => {
  return (
    <button
      ref={buttonRef}
      className={styles.icon_button}
      title={title ?? ''}
      onClick={action}
    >
      {children}
    </button>
  );
};

export const IconButtonSolid: React.FC<Props> = ({
  children,
  action,
  title,
  variant,
}) => {
  return (
    <button
      className={
        variant == 'solid'
          ? styles.icon_button_solid
          : styles.icon_button_outline
      }
      title={title ?? ''}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default IconButton;

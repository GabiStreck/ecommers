import React, { FC, ReactNode, RefObject } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';

import { PopupPosition } from '@/hooks/usePopup';
import styles from '@/styles/coreUI/popup.module.css';

import IconButton from '../IconButton';

interface PopupProps {
  onClose: () => void;
  popupPosition: PopupPosition | null;
  popupRef: RefObject<HTMLDivElement>;
  children: ReactNode;
}

const Popup: FC<PopupProps> = ({
  onClose,
  popupRef,
  children,
  popupPosition,
}) => {
  return (
    <div
      ref={popupRef}
      className={styles.popup}
      style={{
        top: `${popupPosition?.top}px`,
        left: `${popupPosition?.left}px`,
      }}
    >
      <div className={styles.popup_content}>
        <span className={styles.popup_close}>
          <IconButton action={onClose}>
            <XCircleIcon width={20} color="#fc7979" />
          </IconButton>
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;

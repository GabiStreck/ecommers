import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { ButtonText } from '../Button';
import styles from '@/styles/coreUI/Popup.module.css';

interface Props {
  title: string;
  showButton: boolean;
  actionButton?: () => void;
}

const PopupHeader: FC<Props> = ({ title, actionButton, showButton }) => {
  return (
    <div className={styles.popup_header}>
      <h2>{title}</h2>
      {showButton && (
        <ButtonText active onClick={actionButton}>
          <span className={styles.header_remove}>
            <TrashIcon width={15} /> Remove All{' '}
          </span>
        </ButtonText>
      )}
    </div>
  );
};

export default PopupHeader;

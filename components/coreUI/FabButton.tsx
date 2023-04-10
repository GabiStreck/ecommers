import { FC, ReactNode } from 'react';
import styles from '@/styles/coreUI/FabButton.module.css';

type FabButtonProps = {
    onClick: () => void;
    children: ReactNode;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const FabButton: FC<FabButtonProps> = ({ onClick, children, position = 'bottom-right' }) => {
    const buttonClasses = [
        styles.fabButton,
        position === 'top-left' && styles.topLeft,
        position === 'top-right' && styles.topRight,
        position === 'bottom-left' && styles.bottomLeft,
        position === 'bottom-right' && styles.bottomRight,
    ].join(' ');

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default FabButton;
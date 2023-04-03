import { OFFSET_POPUP } from '@/constants';
import {
    useState,
    useRef,
    useCallback,
    useEffect,
    startTransition
} from 'react';

export interface PopupPosition { top: number; left: number }

export const usePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    useEffect(() => {
        handleResize()
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                togglePopup();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleResize = () => {
        if (isOpen && buttonRef.current) {
            const positions = getPopupPosition(buttonRef.current)
            startTransition(() => {
                setPopupPosition(positions);
            });
        }
    }

    const togglePopup = useCallback(() => {
        startTransition(() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
        });
    }, []);

    const getPopupPosition = (button: HTMLButtonElement) => {
        const buttonRect = button.getBoundingClientRect();
        const popupRect = popupRef.current?.getBoundingClientRect();

        if (!popupRect) {
            return null;
        }

        let top = buttonRect.bottom;
        let left = buttonRect.left;

        // Check if popup would exceed viewport height
        if (top + popupRect.height > window.innerHeight) {
            top = window.innerHeight - popupRect.height;
        }

        // Check if popup would exceed viewport width
        if (left + popupRect.width > window.innerWidth) {
            left = window.innerWidth - popupRect.width;
        } else if (left < 0) {
            left = 0;
        }

        top += OFFSET_POPUP;
        left -= OFFSET_POPUP * 2
        return { top, left };
    };

    return {
        isOpen,
        popupRef,
        buttonRef,
        togglePopup,
        popupPosition
    };
};


import { useEffect } from 'react'
import { a as Animated, useSpring, config } from '@react-spring/web'
import styles from '@/styles/coreUI/Drawer.module.css'
import IconButton from './IconButton';
import { XCircleIcon } from '@heroicons/react/24/solid';


interface DrawerProps {
    isOpen: boolean;
    onToggleDrawer: () => void;
    direction: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
}

const Drawer = ({ isOpen, onToggleDrawer, direction, children }: DrawerProps) => {
    const [{ x, y }, api] = useSpring(() => ({
        x: direction === 'left' ? -500 : direction === 'right' ? 500 : 0,
        y: direction === 'top' ? -500 : direction === 'bottom' ? 500 : 0,
        immediate: false,
    }))

    useEffect(() => {
        if (isOpen) {
            api.start({
                x: 0,
                y: 0,
                immediate: true,
                config: config.stiff,
            })
        }
    }, [isOpen, direction, api])


    const close = (velocity = 0) => {
        api.start({
            x: direction === 'left' ? -500 : direction === 'right' ? 500 : 0,
            y: direction === 'top' ? -500 : direction === 'bottom' ? 500 : 0,
            immediate: true, config: { ...config.stiff, velocity }
        })
        setTimeout(onToggleDrawer, velocity * 100)
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                className={styles.backdrop}
                onClick={() => close(1)}
                style={{ display: isOpen ? 'block' : 'none' }}
            />
            <Animated.div
                className={`${styles.drawer} ${styles[direction]}`}
                style={{ display: isOpen ? 'block' : 'none', x, y }}
            >
                <div className={styles.close_container}>
                    <IconButton action={() => close(1)}>
                        <XCircleIcon width={20} color='#fc7979' />
                    </IconButton>
                </div>
                {children}
            </Animated.div>

        </div>
    )
}

export default Drawer

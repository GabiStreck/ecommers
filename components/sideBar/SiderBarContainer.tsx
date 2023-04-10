import { FC, ReactNode } from 'react';
import Image from 'next/image';
import styles from '@/styles/Sidebar.module.css';

interface PropsSideBarContainer {
    children: ReactNode;
}

const SiderBarContainer: FC<PropsSideBarContainer> = ({ children }) => (
    <aside className={styles.sidebar_container}>
        <div className={styles.logo_container}>
            <Image
                src="/images/logo-ecommers.png"
                alt="logo"
                height={40}
                width={120}
                loading="lazy"
            />
        </div>
        {children}
    </aside>
)

export default SiderBarContainer;

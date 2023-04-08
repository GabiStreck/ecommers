import React from 'react';
import SideBar from './sideBar';
import Header from './header';
import useDrawer from '@/hooks/useDrawer';
import styles from '@/styles/Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isOpen, toggleDrawer } = useDrawer()
    return (
        <div className={styles.layout}>
            <SideBar
                isOpen={isOpen}
                onToggleSidebar={toggleDrawer}
            />
            <main className={styles.main_conteiner}>
                <Header onToggleSidebar={toggleDrawer} />
                {children}
            </main>
        </div>
    );
};

export default Layout;
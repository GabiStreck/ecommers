import React from 'react';
import styles from '@/styles/Layout.module.css'
import HeaderPage from '../header/HeaderPage';

interface LayoutProps {
    children: React.ReactNode;
}
const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <main className={styles.mainPage_conteiner}>
                <HeaderPage />
                {children}
            </main>
        </div>
    );
};

export default LayoutPage;
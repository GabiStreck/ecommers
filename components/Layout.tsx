import React from 'react';
import SideBar from './sideBar';
import Header from './header';
import useDrawer from '@/hooks/useDrawer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isOpen, toggleDrawer } = useDrawer()
    return (
        <div className="layout">
            <Header onToggleSidebar={toggleDrawer} />
            <SideBar
                isOpen={isOpen}
                onToggleSidebar={toggleDrawer}
            />

            <main className="content">
                {children}

            </main>
        </div>
    );
};

export default Layout;
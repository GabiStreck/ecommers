import React from 'react';
import SideBar from './sideBar/SiderBar';
import Header from './header';
import useDrawer from '@/hooks/useDrawer';
import styles from '@/styles/Layout.module.css'
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_MOBILE } from '@/constants';
import FabButton from './coreUI/FabButton';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import SideBarFilters from './sideBar/SideBarFilters';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isOpen, toggleDrawer } = useDrawer()
    const { isOpen: openFilters, toggleDrawer: toggleFilters } = useDrawer()
    const isMobile = useMediaQuery(MEDIAQUERY_MOBILE)
    return (
        <div className={styles.layout}>
            <SideBar
                isOpen={isOpen}
                onToggleSidebar={toggleDrawer}
            />

            {isMobile ? (
                <SideBarFilters
                    isOpen={openFilters}
                    onToggleSidebar={toggleFilters}
                />
            ) : null}

            <main className={styles.main_conteiner}>
                <Header onToggleSidebar={toggleDrawer} />
                {children}

                {isMobile ?
                    <FabButton onClick={toggleFilters}>
                        <AdjustmentsHorizontalIcon width={25} />
                    </FabButton>
                    : null
                }
            </main>
        </div>
    );
};

export default Layout;
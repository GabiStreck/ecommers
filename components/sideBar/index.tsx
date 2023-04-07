import Image from 'next/image';

import styles from '@/styles/Sidebar.module.css';

import Divider from '../coreUI/Divider';
import FilterCategory from '../filter/FilterCategory';
import FilterPrice from '../filter/FilterPrice';
import FilterRating from '../filter/FilterRating';
import { MEDIAQUERY_MOBILE } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import { FC, ReactNode } from 'react';
import NavBar from '../header/NavBar';
import Drawer from '../coreUI/Drawer';

interface PropsSideBar {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

interface PropsSideBarContainer {
  children: ReactNode;
}

const SideBar: FC<PropsSideBar> = ({ isOpen, onToggleSidebar }) => {
  const isMobile = useMediaQuery(MEDIAQUERY_MOBILE)

  if (isMobile) return (
    <Drawer
      isOpen={isOpen}
      onToggleDrawer={onToggleSidebar}
      direction='left'
    >
      <SiderBarContainer>
        <NavBar />
      </SiderBarContainer>
    </Drawer>
  )

  return (
    <SiderBarContainer>
      <FilterSetion />
    </SiderBarContainer>
  );
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

const FilterSetion = () => (
  <ul className={styles.filters_list}>
    <FilterCategory />
    <Divider />
    <FilterPrice />
    <Divider />
    <FilterRating />
  </ul>
)

export default SideBar;

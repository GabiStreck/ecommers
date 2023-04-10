import { MEDIAQUERY_MOBILE } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import { FC } from 'react';
import NavBar from '../header/NavBar';
import Drawer from '../coreUI/Drawer';
import SiderBarContainer from './SiderBarContainer';
import FilterSection from './FilterSection';

interface PropsSideBar {
  isOpen: boolean;
  onToggleSidebar: () => void;
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
      <FilterSection />
    </SiderBarContainer>
  );
}


export default SideBar;

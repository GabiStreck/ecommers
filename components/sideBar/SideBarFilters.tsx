
import { FC } from 'react';
import Drawer from '../coreUI/Drawer';
import SiderBarContainer from './SiderBarContainer';
import FilterSection from './FilterSection';

interface PropsSideBarFilters {
    isOpen: boolean;
    onToggleSidebar: () => void;
}

const SideBarFilters: FC<PropsSideBarFilters> = ({ isOpen, onToggleSidebar }) => {
    return (
        <Drawer
            isOpen={isOpen}
            onToggleDrawer={onToggleSidebar}
            direction='left'
        >
            <SiderBarContainer>
                <FilterSection />
            </SiderBarContainer>
        </Drawer>
    )
}


export default SideBarFilters;

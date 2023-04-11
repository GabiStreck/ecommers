import dynamic from 'next/dynamic';
import { HeartIcon } from '@heroicons/react/24/outline';
import useDrawer from '@/hooks/useDrawer';
import IconButton from '../coreUI/IconButton';
import Drawer from '../coreUI/Drawer';

const FavoriteList = dynamic(() => import('./FavoriteList'), {
    loading: () => <span>...loading</span>,
    ssr: true,
});

const FavoriteDrawer = () => {
    const { isOpen, toggleDrawer } = useDrawer();

    return (
        <>
            <IconButton action={toggleDrawer} title="Favorites">
                <HeartIcon width={15} height={15} />
            </IconButton>
            {isOpen && (
                <Drawer
                    direction='bottom'
                    isOpen={isOpen}
                    onToggleDrawer={toggleDrawer}
                >

                    <FavoriteList />
                </Drawer>
            )}
        </>
    );
};

export default FavoriteDrawer;

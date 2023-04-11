import dynamic from 'next/dynamic';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import useDrawer from '@/hooks/useDrawer';

import IconButton from '../coreUI/IconButton';
import Drawer from '../coreUI/Drawer';

const Cart = dynamic(() => import('./Cart'), {
    loading: () => <span>...loading</span>,
    ssr: true,
});

const CartDrawer = () => {
    const { isOpen, toggleDrawer } = useDrawer();

    return (
        <>
            <IconButton action={toggleDrawer} title="Cart" >
                <ShoppingBagIcon width={15} height={15} />
            </IconButton>
            {isOpen && (
                <Drawer
                    direction='bottom'
                    isOpen={isOpen}
                    onToggleDrawer={toggleDrawer}
                >
                    <Cart />
                </Drawer>
            )}
        </>
    );
};

export default CartDrawer;

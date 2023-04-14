import { FC } from 'react';
import CartPopup from '../cart/CartPopup';
import CartDrawer from '../cart/CartDrawer';
import FavoriteDrawer from '../favorite/FavoriteDrawer';
import FavoritePopup from '../favorite/FavoritePopup';
import Avatar from '../coreUI/Avatar';
import Search from '../search';

import styles from '@/styles/Header.module.css';

interface HeaderActionProps {
    isMobile?: boolean;
    hideSearch?: boolean;
}


const HeaderActions: FC<HeaderActionProps> = ({ isMobile = false, hideSearch = false }) => (
    <div className={styles.actions_container}>
        {hideSearch ? null : <Search />}
        {isMobile ?
            <>
                <FavoriteDrawer />
                <CartDrawer />
            </>
            :
            <>
                <FavoritePopup />
                <CartPopup />
            </>
        }
        <Avatar src="https://picsum.photos/30" alt="logo" />
    </div>
)




export default HeaderActions;

import { FC } from 'react';
import { Bars4Icon } from '@heroicons/react/24/outline';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_MOBILE } from '@/constants';

import CartPopup from '../cart/CartPopup';
import Avatar from '../coreUI/Avatar';
import FavoritePopup from '../favorite/FavoritePopup';
import Search from '../search';
import NavBar from './NavBar';
import IconButton from '../coreUI/IconButton';

import styles from '@/styles/Header.module.css';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const isMobile = useMediaQuery(MEDIAQUERY_MOBILE)

  return (
    <header className={styles.header_container}>
      {isMobile ? <HeaderMobile {...props} /> : <HeaderDesktop />}
    </header>
  )
}

const HeaderActions = () => (
  <div className={styles.actions_container}>
    <Search />
    <FavoritePopup />
    <CartPopup />
    <Avatar src="https://picsum.photos/30" alt="logo" />
  </div>
)

const HeaderMobile: FC<HeaderProps> = ({ onToggleSidebar }) => (
  <>
    <IconButton action={onToggleSidebar}>
      <Bars4Icon width={20} />
    </IconButton>
    <HeaderActions />
  </>
)

const HeaderDesktop = () => (
  <>
    <NavBar />
    <HeaderActions />
  </>
)


export default Header;



import styles from '@/styles/Header.module.css';

import CartPopup from '../cart/CartPopup';
import Avatar from '../coreUI/Avatar';
import FavoritePopup from '../favorite/FavoritePopup';
import Search from '../search';
import NavBar from './NavBar';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_MOBILE } from '@/constants';
import IconButton from '../coreUI/IconButton';
import { Bars4Icon } from '@heroicons/react/24/outline';
import { FC } from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const isMobile = useMediaQuery(MEDIAQUERY_MOBILE)

  if (isMobile) return <HeaderMobile {...props} />
  return <HeaderDesktop />
}


const HeaderMobile: FC<HeaderProps> = ({ onToggleSidebar }) => (
  <header className={styles.header_container}>
    <IconButton action={onToggleSidebar}>
      <Bars4Icon width={20} />
    </IconButton>
    <div className={styles.actions_container}>
      <Search />
      <FavoritePopup />
      <CartPopup />
      <Avatar src="https://picsum.photos/30" alt="logo" />
    </div>
  </header>
)


const HeaderDesktop = () => (
  <header className={styles.header_container}>
    <NavBar />
    <div className={styles.actions_container}>
      <Search />
      <FavoritePopup />
      <CartPopup />
      <Avatar src="https://picsum.photos/30" alt="logo" />
    </div>
  </header>
)

export default Header;

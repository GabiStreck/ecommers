import { FC } from 'react';
import { Bars4Icon } from '@heroicons/react/24/outline';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_MOBILE } from '@/constants';

import NavBar from './NavBar';
import IconButton from '../coreUI/IconButton';

import styles from '@/styles/Header.module.css';
import HeaderActions from './HeaderActions';

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

const HeaderMobile: FC<HeaderProps> = ({ onToggleSidebar }) => (
  <>
    <IconButton action={onToggleSidebar}>
      <Bars4Icon width={20} />
    </IconButton>
    <HeaderActions isMobile />
  </>
)

const HeaderDesktop = () => (
  <>
    <NavBar />
    <HeaderActions />
  </>
)


export default Header;

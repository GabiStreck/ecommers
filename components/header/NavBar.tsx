
import { MEDIAQUERY_MOBILE, NAV_LINKS } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();
    return (
        <nav
            className={`${styles.navigation_container}`}>
            {NAV_LINKS.map((item) => {
                const path = item == 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                    <Link
                        key={item}
                        className={router.pathname == path
                            ? styles.navigation_link_selected
                            : styles.navigation_link}
                        href={path}
                    >
                        {item}
                    </Link>
                );
            })}
        </nav>
    );
}

export default NavBar

import Link from "next/link"
import styles from '@/styles/header.module.css'
import { useRouter } from "next/router";
import Search from "../search";
import IconButton from "../coreUI/IconButton";
import { HeartIcon } from '@heroicons/react/24/outline'
import Avatar from "../coreUI/Avatar";
import CartPopup from "../cart/CartPopup";

const NAV_LINKS = ['Home', 'Sale', 'Women', 'Man', 'Kids']

function Header() {
    const router = useRouter();
    return (
        <header className={styles.header_container}>
            <nav className={styles.navigation_container}>
                {NAV_LINKS.map(item => {
                    const path = item == 'Home' ? '/' : `/${item.toLowerCase()}`
                    return (
                        <Link key={item} className={router.pathname == path ? styles.navigation_link_selected : styles.navigation_link} href={path}>
                            {item}
                        </Link>
                    )
                })}
            </nav>
            <div className={styles.actions_container}>
                <Search />
                <IconButton title="Favorite">
                    <HeartIcon width={15} height={15} />
                </IconButton>
                <CartPopup />
                <Avatar src="https://picsum.photos/30" alt="logo" />
            </div>
        </header>
    )
}

export default Header
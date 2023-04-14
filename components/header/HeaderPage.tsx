import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_MOBILE } from '@/constants';

import styles from '@/styles/Header.module.css';
import HeaderActions from './HeaderActions';


const HeaderPage = () => {
    const isMobile = useMediaQuery(MEDIAQUERY_MOBILE)
    return (
        <header className={styles.header_container}>
            <Link href="/" title='Home' prefetch>
                <ArrowLeftIcon width={20} />
            </Link>
            <HeaderActions isMobile={isMobile} hideSearch />
        </header>
    )
}

export default HeaderPage;

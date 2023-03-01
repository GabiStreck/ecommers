import styles from '@/styles/sidebar.module.css';
import Divider from '../coreUI/Divider';
import Filter from '../filter';

function SideBar() {
    return (
        <aside className={styles.sidebar_container}>
            <div className={styles.logo_container}>
                <img src="/logo-ecommers.png" alt="logo" height={40} />
            </div>
            <ul className={styles.filters_list}>
                <Filter title='Category' filters={[{ id: '1', name: 'Sneakers' }, { id: '2', name: 'Flats' }, { id: '3', name: 'Sandals' }, { id: '4', name: 'Heels' }]} />
                <Divider />
                <Filter title='Price' filters={[{ id: '6', name: '$0 - $50' }, { id: '7', name: '$50 - $100' }, { id: '8', name: '$100 - $150' }, { id: '9', name: 'Over $150' }]} >                </Filter>
                <Divider />
                <Filter multiselect title='Color' filters={[{ id: '10', name: 'Black' }, { id: '11', name: 'Blue' }, { id: '12', name: 'Red' }, { id: '13', name: 'Multicolor' }]} />
                <Divider />
                <Filter title='Rating' filters={[{ id: '14', name: '5 star' }, { id: '15', name: '4 star' }, { id: '16', name: '3 start' }]} />
            </ul>
        </aside>
    )
}

export default SideBar

import Divider from "@/components/coreUI/Divider";
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import FilterBar from "@/components/filter/FilterBar";
import styles from '../styles/homePage.module.css';
import ProductList from "@/components/product/ProductList";

export default function Home() {
    return (
        <main className={styles.main_container}>
            <SideBar />
            <section className={styles.main_contein}>
                <Header />
                <Divider />
                <div className={styles.recommended_section}>
                    <h2>Recommended</h2>
                    <FilterBar filters={[{ name: 'Nike' }, { name: 'Adidas' }, { name: 'Puma' }, { name: 'Vans' }, { name: 'Reebook' }]} />
                    <ProductList />
                </div>
            </section>
        </main>
    );
} 


import Divider from "@/components/coreUI/Divider";
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import FilterBar from "@/components/filter/FilterBar";
import styles from '../styles/homePage.module.css';
import Products from "@/components/product/Products";

export default function Home() {
    return (
        <main className={styles.main_container}>
            <SideBar />
            <section className={styles.main_contein}>
                <Header />
                <Divider />
                <div className={styles.recommended_section}>
                    <h2>Recommended</h2>
                    <FilterBar />
                    <Products />
                </div>
            </section>
        </main>
    );
} 

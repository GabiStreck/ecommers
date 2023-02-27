
import Header from "@/components/header";
import SideBar from "@/components/sideBar";
import styles from '../styles/main.module.css';

export default function Home() {
    return (
        <main className={styles.main_container}>
            <SideBar />
            <div className={styles.main_contein}>
                <Header />
                <div>
                    Products
                </div>
            </div>
        </main>
    );
} 

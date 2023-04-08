import Divider from '@/components/coreUI/Divider';
import FilterBar from '@/components/filter/FilterBar';
import Products from '@/components/product/Products';

import styles from '../styles/Layout.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Divider />
      <div className={styles.recommended_section}>
        <h2>Recommended</h2>
        <FilterBar />
        <Products />
      </div>
    </Layout>
  );
}

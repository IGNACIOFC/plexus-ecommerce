import { useQuery } from 'react-query';
import Header from '../../components/Header';
import { fetchProducts } from '../../services/products';
import styles from './Home.module.css';
import ProductCard from '../../components/ProductCard';

export default function Home () {
  const {data: products, isLoading} = useQuery(["products"], fetchProducts);

  

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.home}>
        <h2 className={styles.homeTitle}>Nuestros Productos</h2>
        {
          isLoading && <p>Loading...</p>
        }
        {
          products && 
          <div className={styles.productList}>
            {products.map(product => <ProductCard product={product} />)}
          </div>
        }
      </div>
      
    </div>
  )
}
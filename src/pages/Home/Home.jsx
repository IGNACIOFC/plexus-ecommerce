import { useQuery } from 'react-query';
import Header from '../../components/Header';
import { fetchProducts } from '../../services/products';
import styles from './Home.module.css';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

export default function Home () {
  const {data: products, isLoading} = useQuery(["products"], fetchProducts);
  const [currentPage, setCurrentPage] = useState(0);

  const pageProducts = () => {
    if(products) {
      return products.slice(currentPage, currentPage + 8);
    }
  }

  function nextPage() {
    setCurrentPage(currentPage+ 5)
  }

  function prevPage() {
    if(currentPage > 0) {
      setCurrentPage(currentPage - 5)
    }
  }

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.home}>
        <div className={styles.titleContainer}>
          <h2 className={styles.homeTitle}>Nuestros Productos</h2>
          <SearchBar placeholder={'Encuentra tu producto...'} data={products}/>
        </div>
        {
          isLoading && <p>Loading...</p>
        }
        {
          pageProducts() && 
          <div className={styles.productList}>
            {pageProducts().map(product => <ProductCard product={product}/>)}
          </div>
        }
        <div className={styles.buttonContainer}>
          <button onClick={prevPage}>Anteriores</button>
          <button onClick={nextPage}>Siguientes</button>
        </div>
      </div>
      
    </div>
  )
}
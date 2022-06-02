import Header from "../../components/Header";
import AppBreadcrumbs from "../../components/AppBreadcrumbs";
import styles from './ProductDetails.module.css';

export default function ProductDetails () {
  return (
    <div className={styles.productDetailsContainer}>
      <Header />
      <div className={styles.productDetails}>
        <AppBreadcrumbs item={'item'}/>
      </div>
    </div>
  )
}
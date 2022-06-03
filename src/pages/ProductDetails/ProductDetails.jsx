import Header from "../../components/Header";
import AppBreadcrumbs from "../../components/AppBreadcrumbs";
import styles from './ProductDetails.module.css';
import { useLocation } from "react-router-dom";
import { fetchProductDetails } from "../../services/products";
import { useQuery } from "react-query";
import ItemDetails from "../../components/ItemDetails";

export default function ProductDetails () {
  const location = useLocation();
  const productId = location.pathname
  const {data: item, isLoading} = useQuery(["products", productId], () => fetchProductDetails(productId))

  return (
    <div className={styles.productDetailsContainer}>
      <Header />
      <div className={styles.productDetails}>
        <AppBreadcrumbs item={'item'}/>
        {isLoading && <p>Loading...</p>}
        {item && <ItemDetails item={item} />}
      </div>
    </div>
  )
}
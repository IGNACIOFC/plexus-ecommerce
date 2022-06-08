import Header from "../../components/Header";
import AppBreadcrumbs from "../../components/AppBreadcrumbs";
import styles from './ProductDetails.module.css';
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../services/products";
import { useQuery } from "react-query";
import ItemDetails from "../../components/ItemDetails";
import Actions from "../../components/Actions";

export default function ProductDetails () {
  const {id} = useParams();
  const {data: item, isLoading} = useQuery(["products", id], () => fetchProductDetails(`/${id}`))

  return (
    <div className={styles.productDetailsContainer}>
      <Header />
      <div className={styles.productDetails}>
        <AppBreadcrumbs item={'item'}/>
        {isLoading && <p>Loading...</p>}
        {item && 
          <div className={styles.productDescription}>
            <ItemDetails item={item} />
            <Actions productId={item.id} options={item.options}/>
          </div>
        }
      </div>
    </div>
  )
}
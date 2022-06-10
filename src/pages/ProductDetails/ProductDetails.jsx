import Header from '../../components/Header'
import AppBreadcrumbs from '../../components/AppBreadcrumbs'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { fetchProductDetails } from '../../services/products'
import { useQuery } from 'react-query'
import ItemDetails from '../../components/ItemDetails'
import Actions from '../../components/Actions'

export default function ProductDetails () {
  const { id } = useParams()
  const { data: item, isLoading, isError } = useQuery(['products', id], () => fetchProductDetails(`/${id}`))

  if (isError) {
    return <p>Vaya... Hemos tenido un problema. Inténtelo de nuevo.</p>
  }

  return (
    <div className={styles.productDetailsContainer}>
      <Header />
      <div className={styles.productDetails}>
        {isLoading && <p>Loading...</p>}
        {item &&
        <>
          <AppBreadcrumbs itemName={`${item.brand} ${item.model}`} />
           <div className={styles.productDescription}>
            <ItemDetails item={item} />
            <Actions productId={item.id} options={item.options} />
          </div>
        </>}
      </div>
    </div>
  )
}

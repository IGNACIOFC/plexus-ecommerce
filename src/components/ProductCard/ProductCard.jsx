import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard ({product}) {

  return(
    <div className={styles.productCardContainer}>
      <Link to={`${product.id}`} className={styles.link}>
      <img src={product.imgUrl} alt={product.model}/>
      <div className={styles.productInfo}>
        <p className={styles.productBrand}>{product.brand}</p>
        <p className={styles.productModel}>{product.model}</p>
        <p className={styles.productPrice}>{product.price} €</p>
      </div>
      </Link>
    </div>
  )
}
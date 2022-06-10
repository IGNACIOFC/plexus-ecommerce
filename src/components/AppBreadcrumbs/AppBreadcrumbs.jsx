import { Link } from 'react-router-dom'
import styles from './AppBreadcrumbs.module.css'

export default function AppBreadcrumbs ({ itemName }) {
  return (
    <div className={styles.breadcrumbs}>
      <Link to='/' className={styles.home}>
        <span>Productos</span>
      </Link>
      {itemName && <><span> / </span> <span>{itemName}</span></>}
    </div>
  )
}

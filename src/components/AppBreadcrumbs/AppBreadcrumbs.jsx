import { Link } from 'react-router-dom'
import styles from './AppBreadcrumbs.module.css'

export default function AppBreadcrumbs ({ item }) {
  return (
    <div className={styles.breadcrumbs}>
      <Link to='/' className={styles.home}>
        <span>Productos</span>
      </Link>
      {item && <><span> / </span> <span>{item}</span></>}
    </div>
  )
}

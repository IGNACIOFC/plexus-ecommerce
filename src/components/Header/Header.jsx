import styles from './Header.module.css';
import CartIcon from '../CartIcon';

import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          <div>Logo</div>
        </Link>
        <div className={styles.cart}>
          <CartIcon />
        </div>
      </div>
    </div>
  )
}
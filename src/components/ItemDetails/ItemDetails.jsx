import styles from './ItemDetails.module.css'

export default function ItemDetails ({item}) {
  return (
    <div className={styles.itemDetailsContainer}>
      <img src={item.imgUrl} alt={item.model}/>
      <div className={styles.itemDetails}>
        <div>Item Details</div>
        <div>Configuration</div>
      </div>
    </div>
  )
}
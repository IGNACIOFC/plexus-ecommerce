import styles from './ItemDetails.module.css'

export default function ItemDetails ({ item }) {
  return (
    <div className={styles.itemDetailsContainer}>
      <img src={item.imgUrl} alt={item.model} />
      <div className={styles.itemDetails}>
        <div>
          <ul>
            <li>Marca: {item.brand}</li>
            <li>Modelo: {item.model}</li>
            <li>Precio: {item.price}</li>
            <li>CPU: {item.cpu}</li>
            <li>RAM: {item.internalMemory.ram}</li>
            <li>Sistema Operativo: {item.os}</li>
            <li>Resolución de pantalla: {item.displayResolution}</li>
            <li>Batería: {item.battery}</li>
            <li>Cámara Principal: {item.primaryCamera[0]}, {item.primaryCamera[1]}</li>
            <li>Cámara Secundaria: {item.secondaryCmera[0]}, {item.secondaryCmera[1]}</li>
            <li>Dimensiones: {item.dimentions}</li>
            <li>Peso: {item.weight}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

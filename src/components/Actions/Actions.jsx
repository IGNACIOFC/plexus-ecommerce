import { useState } from 'react'
import AddToCart from '../AddToCart'
import styles from './Actions.module.css'

export default function Actions ({ productId, options }) {
  const [optionSelected, setOptionSelected] = useState({
    color: options.colors[0].code,
    storage: options.storages[0].code
  })

  function colorHandleClick (e) {
    const colorId = parseInt(e.target.getAttribute('data-id'))
    setOptionSelected((state) => {
      return { color: colorId, storage: state.storage }
    })
  }

  function storageHandleClick (e) {
    const storageId = parseInt(e.target.getAttribute('data-id'))
    setOptionSelected((state) => {
      return { color: state.color, storage: storageId }
    })
  }

  console.log(optionSelected)

  return (
    <div>
      <div>
        <p>Colores: </p>
        {options.colors && options.colors.map(color =>
          <button
            key={color.code}
            data-id={color.code}
            className={color.code === optionSelected.color ? styles.selected : styles.select}
            onClick={colorHandleClick}
          >
            {color.name}
          </button>
        )}
      </div>
      <div>
        <p>Memoria: </p>
        {options.storages && options.storages.map(option =>
          <button
            key={option.code}
            data-id={option.code}
            className={option.code === optionSelected.storage ? styles.selected : styles.select}
            onClick={storageHandleClick}
          >
            {option.name}
          </button>
        )}
      </div>
      <div>
        <AddToCart optionSelected={optionSelected} id={productId} />
      </div>
    </div>
  )
}

import { useMutation, useQueryClient } from 'react-query'
import { addToCart } from '../../services/products'
import styles from './AddToCart.module.css'

export default function AddToCart ({ optionSelected, id }) {
  const queryClient = useQueryClient()

  const { mutate, isError } = useMutation(addToCart, {
    onSuccess: () => {
      queryClient.setQueryData(['cart'], (prevItems) => {
        const count = prevItems + 1
        localStorage.setItem('cart', count)
        return count
      })
    }
  })

  function handleCart () {
    const body = {
      id,
      colorCode: optionSelected.color,
      storageCode: optionSelected.storage
    }
    mutate(body)
  }

  return (
    <>
      <button className={styles.submitButton} onClick={handleCart}>Añadir</button>
      {isError && <p>Intentelo de nuevo.</p>}
    </>
  )
}

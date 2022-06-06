import { useMutation, useQueryClient } from "react-query"
import { addToCart } from "../../services/products";

export default function AddToCart ({optionSelected, id}) {

  const queryClient = useQueryClient();
  
  const {mutate} = useMutation(addToCart, {
    onSuccess: () => {
      queryClient.setQueryData(["cart"], (prevItems) => {
        const count = prevItems + 1
        localStorage.setItem("cart", count);
        return count
      })
    }
  });

  function handleCart () {
    const body = {
      id: id,
      colorCode: optionSelected.color,
      storageCode: optionSelected.storage
    }
    mutate(body);
  }

  return <button onClick={handleCart}>Submit</button>

}
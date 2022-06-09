import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useQuery } from 'react-query'
import { fetchCartItems } from '../../services/products'

export default function CartIcon () {
  const { data: items } = useQuery(['cart'], fetchCartItems)
  console.log(items)
  return (
    <div>
      <Badge color='secondary' badgeContent={items}>
        <ShoppingCartIcon />{' '}
      </Badge>
    </div>
  )
}

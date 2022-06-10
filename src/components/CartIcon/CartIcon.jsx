import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useQuery } from 'react-query'
import { fetchCartItems } from '../../services/products'

export default function CartIcon () {
  const { data: items, isLoading, isSuccess } = useQuery(['cart'], fetchCartItems)

  if (isLoading) {
    return <></>
  }

  if (isSuccess) {
    return (
      <div>
        <Badge color='secondary' badgeContent={items} data-testid='icon'>
          <ShoppingCartIcon />{' '}
        </Badge>
      </div>
    )
  }
}

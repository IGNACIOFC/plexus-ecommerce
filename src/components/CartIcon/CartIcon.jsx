import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useQuery } from 'react-query'
import { fetchCartItems } from '../../services/products'

export default function CartIcon () {
  const { data: items, isLoading, isSuccess, isError } = useQuery(['cart'], fetchCartItems)

  console.log(items, isSuccess)

  if (isError) {
    return <></>
  }

  if (isLoading) {
    return <></>
  }

  if (isSuccess) {
    return (
      <div>
        <Badge color='secondary' badgeContent={ items || 1 } data-testid='icon'>
          <ShoppingCartIcon />{' '}
        </Badge>
      </div>
    )
  }
}

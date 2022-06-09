import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import CartIcon from './CartIcon'

describe('Cart Icon', () => {
  it('render cart', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60000 * 24
        }
      }
    })
    render(
      <QueryClientProvider client={queryClient}>
        <CartIcon />
      </QueryClientProvider>
    )
  })
})

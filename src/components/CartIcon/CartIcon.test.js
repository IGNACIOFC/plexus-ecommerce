import { render, act } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import CartIcon from './CartIcon'

it('render cart', async () => {
  await act(async () => {
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

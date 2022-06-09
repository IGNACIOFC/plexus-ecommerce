import { render, screen, act } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

jest.mock('axios')

beforeEach(async () => {
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
      <Router>
        <Header />
      </Router>
    </QueryClientProvider>
    )
  })
})

it('render header logo', () => {
  const header = screen.getByText(/Logo/i)
  expect(header).toBeInTheDocument()
})

it('render cart icon', () => {
  const icon = screen.getByTestId('icon')
  expect(icon).toBeTruthy()
})

import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import AppBreadcrumbs from './AppBreadcrumbs'
import { createMemoryHistory } from 'history'

const productMock = {
  id: 'skjDqIJgq-OGRaUNXXCCu',
  brand: 'Acer',
  model: 'DX900',
  price: 90,
  imgUrl: 'https://front-test-api.herokuapp.com/images/skjDqIJgq-OGRaUNXXCCu.jpg'
}

test('Test ProductCard', () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <AppBreadcrumbs
        itemName={productMock.brand}
      />
    </Router>
  )
  const brand = screen.getByText(/Acer/i)
  expect(brand).toBeInTheDocument()
  const linkToProducts = screen.getByRole('link')
  fireEvent.click(linkToProducts)
  expect(history.location.pathname).toBe('/')
})

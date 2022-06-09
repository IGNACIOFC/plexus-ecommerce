import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import ProductCard from './ProductCard'
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
      <ProductCard
        product={productMock}
      />
    </Router>
  )
  const brand = screen.getByText(/Acer/i)
  expect(brand).toBeInTheDocument()
  const linkToDetail = screen.getByRole('link')
  fireEvent.click(linkToDetail)
  expect(history.location.pathname).toBe(`/${productMock.id}`)
})

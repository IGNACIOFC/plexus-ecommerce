import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import SearchBar from './SearchBar'
import { createMemoryHistory } from 'history'

const dataMock = [{
  id: 'skjDqIJgq-OGRaUNXXCCu',
  brand: 'Acer',
  model: 'DX900',
  price: 90,
  imgUrl: 'https://front-test-api.herokuapp.com/images/skjDqIJgq-OGRaUNXXCCu.jpg'
}]

test('Test SearchBar input', () => {
  render(
      <SearchBar
        placeholder={'encuentra tu producto'}
        data={dataMock}
      />
  )
  const input = screen.getByPlaceholderText(/encuentra tu producto/i)
  expect(input).toBeInTheDocument()
})

test('Test SearchBar input on change', () => {
  const history = createMemoryHistory()

  render(
    <Router location={history.location} navigator={history}>
      <SearchBar
        placeholder={'encuentra tu producto'}
        data={dataMock}
      />
    </Router>
  )
  const input = screen.getByPlaceholderText(/encuentra tu producto/i)
  fireEvent.change(input, { target: { value: 'd' } })
  const model = screen.getByTestId('model')
  expect(input.value).toBe('d')
  expect(model).toBeInTheDocument()
})

test('Test SearchBar close icon', () => {
  const history = createMemoryHistory()

  render(
    <Router location={history.location} navigator={history}>
      <SearchBar
        placeholder={'encuentra tu producto'}
        data={dataMock}
      />
    </Router>
  )
  const input = screen.getByPlaceholderText(/encuentra tu producto/i)
  fireEvent.change(input, { target: { value: 'd' } })
  const closeIcon = screen.getByTestId('CloseIcon')

  fireEvent.click(closeIcon)

  expect(input).toHaveValue('')
})

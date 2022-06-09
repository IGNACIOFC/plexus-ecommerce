import axios from 'axios'

const API = process.env.REACT_APP_API || 'https://front-test-api.herokuapp.com/api'

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${API}/product`)
    return data
  } catch (error) {
    return error
  }
}

export const fetchProductDetails = async (itemId) => {
  try {
    const { data } = await axios.get(`${API}/product${itemId}`)
    return data
  } catch (error) {
    return error
  }
}

export const fetchCartItems = async () => {
  try {
    const cartItems = localStorage.getItem('cart')
    const initialValue = JSON.parse(cartItems)

    return initialValue || 0
  } catch (error) {
    return error
  }
}

export const addToCart = async (body) => {
  try {
    await axios.post(`${API}/cart`, body)
  } catch (error) {
    return error
  }
}

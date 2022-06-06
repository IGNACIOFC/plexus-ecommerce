import axios from "axios";

const API = process.env.REACT_APP_API || "https://front-test-api.herokuapp.com/api";

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API}/product`);
  return data;
};

export const fetchProductDetails = async (itemId) => {
  const { data } = await axios.get(`${API}/product${itemId}`);
  return data;
};

export const fetchCartItems = async () => {
  const cartItems = localStorage.getItem("cart");
  console.log('cart Items:', cartItems)
  const initialValue = JSON.parse(cartItems);

  return initialValue || 0;
}

export const addToCart = async (body) => {
  const { data } = await axios.post(`${API}/cart`, body);
  console.log(data)
}
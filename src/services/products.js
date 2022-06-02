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


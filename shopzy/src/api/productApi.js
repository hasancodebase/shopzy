const API_URL = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};
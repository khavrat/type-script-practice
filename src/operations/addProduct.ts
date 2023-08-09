import axios from "axios";

export async function addProduct(values: object) {
  const response = await axios.post(
    "https://fakestoreapi.com/products", values
  );
  return response.data;
}

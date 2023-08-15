import axios from "axios";
import { BASE_URL } from "../constants/baseURL";


export async function addProduct(values: object) {
  const response = await axios.post(`${BASE_URL}/products`, values);
  return response.data;
}

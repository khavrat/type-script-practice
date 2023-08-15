import axios from "axios";
import { IProduct } from "../models";
import {BASE_URL} from "../constants/baseURL"

export async function fetchProducts() {
  const response = await axios.get<IProduct[]>(
    `${BASE_URL}/products`
  );
  return response.data;
}

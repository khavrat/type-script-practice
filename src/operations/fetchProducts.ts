import axios from "axios";
import { IProduct } from "../models";

export async function fetchProducts() {
  const response = await axios.get<IProduct[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
}

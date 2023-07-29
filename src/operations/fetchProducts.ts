import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export async function fetchProducts() {
  try {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
      return response.data
  } catch (error: any) {
    console.log("error.message :>> ", (error as AxiosError).message);
  }
}

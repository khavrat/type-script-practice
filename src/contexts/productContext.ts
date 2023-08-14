import { createContext } from "react";
import { IProduct } from "../models";

interface ProductContextType {
  newProducts: IProduct[];
  setNewProducts: (products: IProduct[]) => void;
}

export const ProductContext = createContext<ProductContextType>({
  newProducts: [],
  setNewProducts: () => {},
});

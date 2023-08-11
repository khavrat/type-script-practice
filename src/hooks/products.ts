import { useEffect, useState, useContext, useCallback } from "react";
import { AxiosError } from "axios";
import { fetchProducts } from "../operations/fetchProducts";
import { IProduct } from "../models";
import { ProductContext } from "../App";


export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { newProducts } = useContext(ProductContext);
console.log('newProducts in context:>> ', newProducts);
  const fetchData = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await fetchProducts();
      if (data) {
        setProducts(data);
        setLoading(false);
      } else {
        setProducts([]);
      }
    } catch (e: unknown) {
      const error = (e as AxiosError).message;
      setError(error);
      setLoading(false);
    }
  }
 

  const refreshProductList = useCallback(() => {
    setProducts(prev => [...prev, ...newProducts])
        console.log("newProducts in refreshProductList", ...newProducts);
  }, [newProducts])

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    refreshProductList();
  }, [refreshProductList]);


  return { products, loading, error };
};

import { useEffect, useState } from "react";
import { fetchProducts } from "../operations/fetchProducts";
import { IProduct } from "../models";
import { AxiosError } from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError('');
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products, loading, error };
};

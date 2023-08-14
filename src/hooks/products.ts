import { useEffect, useState, useContext } from "react";
import { AxiosError } from "axios";
import { fetchProducts } from "../operations/fetchProducts";
import { IProduct } from "../models";
import { ProductContext } from "../contexts/productContext";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const product = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);

  const refreshProductList = () => {
    const latestProduct = product.newProducts.slice(-1)[0];
    if (latestProduct) {
      setProducts((prev) => [...prev, latestProduct]);
    }
  };

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
  };

  return { products, loading, error, refreshProductList };
};

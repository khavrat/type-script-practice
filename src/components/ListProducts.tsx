import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { fetchProducts } from "../operations/fetchProducts";
import { IProduct } from "../models";
import { SimpleGrid } from "@chakra-ui/react";

export const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log("data :>> ", data);
        if (data) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <SimpleGrid
      spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </SimpleGrid>
  );
};

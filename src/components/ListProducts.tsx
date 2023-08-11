import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/products";
import { Loader } from "./Loader";
import { ErrorView } from "./ErrorView";
import { useEffect } from "react";

export const ListProducts = () => {
  const { products, loading, error } = useProducts();

  useEffect(() => {
    console.log("products in ListProducts :>> ", products);
  }, [products])

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorView />}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

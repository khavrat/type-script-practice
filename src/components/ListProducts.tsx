import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/products";
import { Loader } from "./Loader";
import { ErrorView } from "./ErrorView";
import { SimpleGrid } from "@chakra-ui/react";

export const ListProducts = () => {
  const { products, loading, error } = useProducts();

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

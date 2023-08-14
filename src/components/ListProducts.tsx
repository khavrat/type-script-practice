import { useEffect, useContext } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductContext } from "../contexts/productContext";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/products";
import { Loader } from "./Loader";
import { ErrorView } from "./ErrorView";

export const ListProducts = () => {
  const { products, loading, error, refreshProductList } =
    useProducts();
  const product = useContext(ProductContext);

  useEffect(() => {
    if (product.newProducts.length !== 0) refreshProductList();
    // eslint-disable-next-line 
  }, [product.newProducts.length]);

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

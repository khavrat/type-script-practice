import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import {
  SimpleGrid,
  Spinner,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

export const ListProducts = () => {
  const {products, loading, error} = useProducts()

  return (
    <>
      {loading && (
        <Center>
          <Spinner
            color="brand.700"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            size="xl"
          />
        </Center>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

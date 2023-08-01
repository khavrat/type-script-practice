import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useProducts } from "../hooks/products";

export const ErrorView = () => {
      const { error } = useProducts();

  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{error}</AlertTitle>
    </Alert>
  );
};

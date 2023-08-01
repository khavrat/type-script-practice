import {
  Spinner,
  Center,
} from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Center>
      <Spinner
        color="brand.700"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
      />
    </Center>
  );
};

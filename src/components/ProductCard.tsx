import { IProduct } from "../models";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Image,
  Text,
  Button,
  Divider,
  Box,
  Center,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

interface ProductProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Card maxW="sm">
        <CardHeader minH="100px">
          <Heading size="sm" textTransform="uppercase">
            {product.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Center>
            <Image
              src={product.image}
              alt={product.title}
              borderRadius="lg"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              maxH={{ base: "100%", sm: "200px" }}
            />
          </Center>
        </CardBody>
        <CardFooter>
          <Button
            type="button"
            onClick={onToggle}
            size="sm"
            backgroundColor={isOpen ? "brand.700" : "brand.100"}
            color={isOpen ? "#ffffff" : "#000000"}
            _hover={{ backgroundColor: "brand.50", color: "#000000" }}
          >
            {isOpen ? "Hide Description" : "Show Description"}
          </Button>
          <Center marginLeft="auto">
            <Box>{product.price}$</Box>
          </Center>
        </CardFooter>
        <Collapse in={isOpen} animateOpacity>
          {isOpen && (
            <>
              <Box
                position="absolute"
                zIndex={5}
                p="20px"
                bg="white"
                rounded="md"
                shadow="md"
                width="100%"
              >
                <Divider marginBottom={4} />
                <Text>{product.description}</Text>
              </Box>
            </>
          )}
        </Collapse>
      </Card>
    </>
  );
}

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

export function Product({ product }: ProductProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Card maxW="sm">
        <CardHeader minH="150px">
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
          <Button type="button" onClick={onToggle}>
            {isOpen ? "Hide Description" : "Show Description"}
          </Button>
        </CardFooter>
        <Collapse in={isOpen} animateOpacity>
          {isOpen && (
            <>
              <Box
                position="absolute"
                zIndex={5}
                p="40px"
                mt="4"
                bg="white"
                rounded="md"
                shadow="md"
                width="100%"
              >
                <Divider />
                <Text>{product.description}</Text>
              </Box>
            </>
          )}
        </Collapse>
      </Card>
    </>
  );
}

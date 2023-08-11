import { useContext } from "react";
import { ProductContext } from "../App";

import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { IProduct } from "../models";
import { addProduct } from "../operations/addProduct";
import { CARD_CAP } from "../constants/imageCaps";

const initialProductValues = {
  title: "",
  price: "",
  description: "",
  image: CARD_CAP,
};

export const CreateProduct = ({ onCloseBySubmit }: any) => {
  const productContext = useContext(ProductContext);

  const validateName = (value: any) => {
    let error;
    if (!value) {
      error = "Product name is required";
    }
    return error;
  };

  const handleSubmit = async (
    values: IProduct,
    actions: FormikHelpers<IProduct>
  ) => {
    if (values) {
      const result = await addProduct(values);
      if (result) {
        productContext?.newProducts.push(result);
      }
    }
    if (onCloseBySubmit) onCloseBySubmit();
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialProductValues} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Field name="title" validate={validateName}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.submitCount > 0 && form.errors[field.name]}
              >
                <FormLabel>Title</FormLabel>
                <Input {...field} placeholder="Enter product title" />
                <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="price" validate={validateName}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.submitCount > 0 && form.errors[field.name]}
              >
                <FormLabel>Price</FormLabel>
                <Input {...field} placeholder="Enter product price" />

                <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="description" validate={validateName}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.submitCount > 0 && form.errors[field.name]}
              >
                <FormLabel>Description</FormLabel>
                <Textarea {...field} placeholder="Enter product description" />

                <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

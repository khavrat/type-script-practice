import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { addProduct } from "../operations/addProduct";
import { CARD_CAP } from "../constants/imageCaps";


const initialProductValues = {
  title: "",
  price: "",
  description: "",
  image: CARD_CAP,
};

interface FormValues {
  title: string;
  price: string;
  description: string;
  image: string;
}

export const CreateProduct = ({ onCloseBySubmit }: any) => {
  const validateName = (value: any) => {
    let error;
    if (!value) {
      error = "Product name is required";
    }
    return error;
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    actions.setSubmitting(false);
    if (values) {
      if (onCloseBySubmit) onCloseBySubmit();

      const createdProduct = await addProduct(values);
      console.log("createdProduct :>> ", createdProduct);
    }
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

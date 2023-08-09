import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface FormValues {
  name: string;
}

export const CreateProduct = ({ onCloseBySubmit }: any) => {

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Product name is required";
    }
    return error;
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    actions.setSubmitting(false);
    if (values) {
      if (onCloseBySubmit) onCloseBySubmit();
    }
    console.log("value :>> ", values);
  };

  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Product name</FormLabel>
                <Input {...field} placeholder="Enter product name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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

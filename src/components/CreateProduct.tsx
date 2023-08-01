import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export const CreateProduct = () => {
      const [input, setInput] = useState("");

      const handleInputChange = (e: any) => setInput(e.target.value);

      const isError = input === "";

      return (
        <FormControl isInvalid={isError}>
          <Input type="text" value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText>Enter a title of your product</FormHelperText>
          ) : (
            <FormErrorMessage>Field must not be empty</FormErrorMessage>
          )}
        </FormControl>
      );
    };

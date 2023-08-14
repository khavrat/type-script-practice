const validateName = (value: any) => {
  let error;
  if (!value) {
    error = "Product name is required";
  }
  return error;
};

const validatePrice = (value: string) => {
  let error;
  if (!value) {
    error = "Product price is required";
  } else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
    error = "Price must be a number, valid to use 2 digits after a point";
  }
  return error;
};

const validateDiscription = (value: string) => {
  let error;
  if (!value) {
    error = "Product discription is required";
  }
  return error;
};

export { validateName, validatePrice, validateDiscription };

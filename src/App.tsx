import { createContext } from "react";

import { ListProducts } from "./components/ListProducts";
import { ModalView } from "./components/ModalView";
import { CreateProduct } from "./components/CreateProduct";

import { IProduct } from "./models";

interface ProductContextType {
  newProducts: IProduct[];
}

export const ProductContext = createContext<ProductContextType>({ newProducts:[]});

function App() {
  const newProducts: IProduct[] = [];

  return (
    <ProductContext.Provider value={{ newProducts }}>
      <ListProducts />
      <ModalView
        openButtonName="Create product"
        children={<CreateProduct />}
        title="Create a new product"
      />
    </ProductContext.Provider>
  );
}

export default App;

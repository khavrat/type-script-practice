import { createContext, useState } from "react";

import { ListProducts } from "./components/ListProducts";
import { ModalView } from "./components/ModalView";
import { CreateProduct } from "./components/CreateProduct";

import { IProduct } from "./models";

interface ProductContextType {
  newProducts: IProduct[];
  setNewProducts: (products: IProduct[]) => void;
}

export const ProductContext = createContext<ProductContextType>({
  newProducts: [],
  setNewProducts: () => {},
});

function App() {
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={{ newProducts, setNewProducts }}>
      <ListProducts />
      <ModalView
        openButtonName="Create your product"
        children={<CreateProduct />}
        title="Create a new product"
      />
    </ProductContext.Provider>
  );
}

export default App;

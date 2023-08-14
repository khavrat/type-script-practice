import { useState } from "react";
import { ProductContext } from "./contexts/productContext";

import { ListProducts } from "./components/ListProducts";
import { ModalView } from "./components/ModalView";
import { CreateProduct } from "./components/CreateProduct";

import { IProduct } from "./models";

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

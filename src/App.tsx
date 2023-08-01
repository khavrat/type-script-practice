import { ListProducts } from './components/ListProducts'
import { ModalView } from "./components/ModalView";
import { CreateProduct } from './components/CreateProduct';

function App() {

  return (
    <>
      <ListProducts />
      <ModalView children={ <CreateProduct/>} title="Create a new product" />
    </>
  );
}

export default App;

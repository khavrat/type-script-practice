import { useEffect, useState } from "react";
import { Product } from "./components/Product";
import { fetchProducts } from "./operations/fetchProducts";
import { IProduct } from "./models";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log("data :>> ", data);
        if (data) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default App;

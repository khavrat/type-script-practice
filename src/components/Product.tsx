import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [isShowDescription, setIsShowDescription] = useState(false);

  const toggleIsShowDescription = () => {
    setIsShowDescription((prev) => !prev);
  };
  return (
    <li>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} />
      <button type="button" onClick={toggleIsShowDescription}>
        {isShowDescription ? "Hide Description" : "Show Description"}
      </button>
      {isShowDescription && <p>{product.description}</p>}
    </li>
  );
}

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import "./index.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="category">{product.category}</p>

      <p className="price">${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
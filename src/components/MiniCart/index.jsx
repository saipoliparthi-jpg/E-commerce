import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import "./index.css";

const MiniCart = ({ closeMiniCart }) => {
  const { cartItems, subtotal } = useContext(CartContext);

  return (
    <div className="mini-cart">
      <h3>Mini Cart</h3>

      {cartItems.length === 0 ? (
        <p className="empty-text">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="mini-cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <small>
                Qty: {item.quantity} | ${item.price}
              </small>
            </div>
          </div>
        ))
      )}

      <h4>Subtotal: ${subtotal.toFixed(2)}</h4>

      <Link to="/cart" className="view-cart-btn" onClick={closeMiniCart}>
        View Cart
      </Link>

      <button className="checkout-btn" disabled={cartItems.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default MiniCart;

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import "./index.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem, subtotal } =
    useContext(CartContext);

  const shipping = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty</h2>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <div className="quantity-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            <div>
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>

            <hr />

            <div className="total-row">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
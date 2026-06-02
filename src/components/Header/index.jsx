import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import MiniCart from "../MiniCart";
import "./index.css";

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <nav className="header">
      <Link to="/" className="logo">
        TrendCart
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <button
          className="cart-button"
          onClick={() => setShowMiniCart(!showMiniCart)}
        >
          🛒 Cart <span>{cartCount}</span>
        </button>

        {showMiniCart && (
          <MiniCart closeMiniCart={() => setShowMiniCart(false)} />
        )}
      </div>
    </nav>
  );
};

export default Header;

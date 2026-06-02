import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const onClickCategory = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div>
      <section className="hero-section">
        <div>
          <h1>Discover Your Favorite Products</h1>
          <p>
            Shop latest products with best prices, easy cart and simple checkout.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>

        <div className="featured-cards">
          <div
            className="feature-card"
            onClick={() =>
              onClickCategory("men's clothing")
            }
          >
            Men's Fashion
          </div>
           <div
            className="feature-card"
            onClick={() =>
              onClickCategory("women's clothing")
            }
          >
            Women's Fashion
          </div>

          <div
            className="feature-card"
            onClick={() =>
              onClickCategory("electronics")
            }
          >
            Electronics
          </div>

          <div
            className="feature-card"
            onClick={() =>
              onClickCategory("jewelery")
            }
          >
            Jewellery
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 TrendCart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
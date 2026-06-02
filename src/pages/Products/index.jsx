import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import "./index.css";

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState(selectedCategory || "all");
  const [sortType, setSortType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase()),
  );
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }
  if (sortType === "LOW_TO_HIGH") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "HIGH_TO_LOW") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortType === "A_TO_Z") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "Z_TO_A") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }
  return (
    <div className="products-page">
      <h1>Products</h1>

      <div className="filters-container">
        <input
          type="search"
          placeholder="Search product"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((eachCategory) => (
            <option key={eachCategory} value={eachCategory}>
              {eachCategory}
            </option>
          ))}
        </select>

        <select
          value={sortType}
          onChange={(event) => setSortType(event.target.value)}
        >
          <option value="">Sort By</option>
          <option value="LOW_TO_HIGH">Price Low to High</option>
          <option value="HIGH_TO_LOW">Price High to Low</option>
          <option value="A_TO_Z">Title A to Z</option>
          <option value="Z_TO_A">Title Z to A</option>
        </select>
      </div>

      {isLoading && <h2>Loading...</h2>}

      {errorMsg && <h2 className="error-text">{errorMsg}</h2>}

      {!isLoading && !errorMsg && (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import "./product.css";
import { supabase } from "../src/supabaseClient";

const Products = ({
  cartItems,
  addToCart,
  updateQuantity,
  removeFromCart,
  isCartOpen,
  toggleCart,
  clearCart,
}) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return Number(a.price) - Number(b.price);
      if (sortOrder === "desc") return Number(b.price) - Number(a.price);
      return 0;
    });

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-danger">Products</h1>

      <div className="d-flex justify-content-center mb-3 gap-3 flex-wrap">
        <input
          type="search"
          className="form-control w-25"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select w-25"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="product-card p-3 shadow-sm text-center">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <h5 className="product-name">{product.name}</h5>

              <p className="product-price">
                Price: ${product.price}
              </p>

              <p className="product-stock">
                Qty Available: {product.quantity}
              </p>

              <button
                className="btn btn-outline-success add-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        clearCart={clearCart}
      />
    </div>
  );
};

export default Products;

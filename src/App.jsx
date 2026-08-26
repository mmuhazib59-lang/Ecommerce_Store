import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Products from "./Pages/Product";
import Admin from "./Pages/Admin";
  


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const clearCart = () => {
  setCartItems([]);
};
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => {
  const exists = cartItems.find(item => item.id === product.id);

  if (exists) {

    if (exists.qty < product.quantity) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? {
              ...item,
              qty: item.qty + 1,
              totalPrice: (item.qty + 1) * item.price
            }
          : item
      ));
    } else {
      alert("You can  not add more than available stock");
    }
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        qty: 1,
        totalPrice: product.price
      }
    ]);
  }
};


  const updateQuantity = (id, action) => {
  setCartItems(cartItems.map(item => {
    if (item.id === id) {
      if (action === "inc") {
        if (item.qty < item.quantity) {
          return {
            ...item,
            qty: item.qty + 1,
            totalPrice: (item.qty + 1) * item.price
          };
        } else {
          alert("Stock limit reached");
        }
      }

      if (action === "dec" && item.qty > 1) {
        return {
          ...item,
          qty: item.qty - 1,
          totalPrice: (item.qty - 1) * item.price
        };
      }
    }
    return item;
  }));
};
  const removeFromCart = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  

  return (
    <Router>
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />

        <Route
  path="/products"
  element={
    <Products
      cartItems={cartItems}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
      removeFromCart={removeFromCart}
      isCartOpen={isCartOpen}
      toggleCart={toggleCart}
      clearCart={clearCart}   
    />
  }
/>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

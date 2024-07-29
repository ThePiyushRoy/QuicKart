import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <div className="h-[50vh] flex justify-center items-center text-4xl">
              404 Not Found
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleProduct from "./SingleProduct";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ItemListContainer from "../Components/ItemListContainer/itemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/itemDetailContainer";
import CarritoPage from "../Pages/CarritoPage";
import CheckoutPage from "../Pages/CheckoutPage";

const RutaPrincipal = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default RutaPrincipal;

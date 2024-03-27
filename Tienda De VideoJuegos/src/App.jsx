import React from "react";
import RutaPrincipal from "../src/Routes/RutaPrincipal.jsx";
import "./App.css";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <div>
      <CartProvider>
        <RutaPrincipal />
      </CartProvider>
    </div>
  );
};

export default App;

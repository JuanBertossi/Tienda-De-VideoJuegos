import React from "react";
import carritoLogo from "../assets/carrito.png";
import "./NavBar.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { itemCount } = React.useContext(CartContext);

  return (
    <div className="divCarrito">
      <Link to="/carrito">
        <img className="carrito" src={carritoLogo} alt="carritoLogo" />
      </Link>

      <p style={{ fontSize: "1.2rem" }}>{itemCount}</p>
    </div>
  );
};

export default CartWidget;

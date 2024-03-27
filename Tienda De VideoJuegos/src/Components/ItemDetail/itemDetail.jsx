import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../ItemDetailContainer/itemDetailContainer.css";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(producto);
  };

  if (!producto) {
    return <div>No hay información disponible para mostrar.</div>;
  }

  return (
    <div>
      <h3 className="item-title">{producto.title}</h3>
      <img src={producto.img} alt={producto.title} className="item-image" />
      <p className="item-price">Precio: ${producto.price}</p>
      <p>Stock: {producto.stock}</p>
      <button className="btnAñadirCarrito" onClick={handleAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemDetail;

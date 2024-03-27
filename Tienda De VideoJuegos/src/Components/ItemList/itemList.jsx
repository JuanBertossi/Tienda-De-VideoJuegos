import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <div className="item-container">
      {productos.map((producto) => (
        <Link key={producto.id} to={`/item/${producto.id}`}>
          <div className="item">
            <img
              src={producto.img}
              alt={producto.title}
              className="item-image"
            />
            <h1 className="item-title">{producto.title}</h1>
            <h3 className="item-category">{producto.category}</h3>
            <p className="item-description">{producto.description}</p>
            <h3 className="item-cant">Cantidad: {producto.stock}</h3>
            <h2 className="item-price">Precio: ${producto.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;

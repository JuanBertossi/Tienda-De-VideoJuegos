import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartWidget from "../Components/carrito";
import { Link } from "react-router-dom";
import "../Pages/Pages.css";

const CarritoPage = () => {
  const { itemCount, cartItems, removeItem, clearCart } =
    useContext(CartContext);

  const consolidatedItems = cartItems.reduce((consolidated, currentItem) => {
    const existingItemIndex = consolidated.findIndex(
      (item) => item.id === currentItem.id
    );

    if (existingItemIndex !== -1) {
      consolidated[existingItemIndex].quantity += currentItem.quantity;
    } else {
      consolidated.push({ ...currentItem });
    }

    return consolidated;
  }, []);

  const calcularTotalCarrito = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * parseInt(item.quantity),
      0
    );
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>
        <span className="totalCarrito">
          Total del carrito: ${calcularTotalCarrito()}
        </span>
      </p>
      <p>
        <span className="totalProductos">Total de Productos {itemCount} </span>
      </p>
      <button className="btnVaciar" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <Link to="/checkout">
        <button className="btnFinalizarCompra">Finalizar Compra</button>
      </Link>
      {consolidatedItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="carrito">
          {consolidatedItems.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.img} width={350} height={450} />
                <p>Precio unitario: ${parseFloat(item.price)}</p>
                <p>Cantidad: {parseFloat(item.quantity)}</p>
                <p>
                  Total: ${parseFloat(item.price) * parseInt(item.quantity)}
                </p>
                <button
                  className="btnEliminar"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar por unidad
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CarritoPage;

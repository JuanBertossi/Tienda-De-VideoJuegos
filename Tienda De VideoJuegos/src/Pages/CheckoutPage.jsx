import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../Pages/Pages.css";

const CheckoutPage = () => {
  const { cartItems, calcularTotalCarrito } = useContext(CartContext);
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

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Detalles de los productos:</h3>
      <ul>
        {consolidatedItems.map((item) => (
          <div className="divCheck" key={item.id}>
            <img src={item.img} width={350} height={450} />
            <strong>{item.title}</strong>
            <p>Cantidad: {parseFloat(item.quantity)}</p>
            Precio unitario: ${item.price}
          </div>
        ))}
      </ul>
      <p className="totalCarritoCheck">
        Total del carrito: ${calcularTotalCarrito()}
      </p>
      <h3>Datos del Cliente:</h3>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input type="text" id="dni" name="dni" required />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div>
          <label htmlFor="metodoPago">Método de Pago:</label>
          <select id="metodoPago" name="metodoPago" required>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
          </select>
        </div>
        <button className="btnFinalizarCompraChek" type="submit">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

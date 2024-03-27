import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    alert("A añadido un producto al carrito");
    const stock = parseInt(product.stock);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity < stock) {
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
        setItemCount((prevItemCount) => prevItemCount + 1);
      } else {
        alert("No se puede agregar más del stock disponible.");
      }
    } else {
      if (1 <= stock) {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        setItemCount((prevItemCount) => prevItemCount + 1);
      } else {
        alert("No se puede agregar más del stock disponible.");
      }
    }
  };

  const removeItem = (itemId) => {
    const updatedCartItems = [...cartItems];
    const removedItemIndex = updatedCartItems.findIndex(
      (item) => item.id === itemId
    );
    const removedItem = updatedCartItems[removedItemIndex];

    if (removedItem) {
      if (removedItem.quantity === 1) {
        updatedCartItems.splice(removedItemIndex, 1);
      } else {
        updatedCartItems[removedItemIndex] = {
          ...removedItem,
          quantity: removedItem.quantity - 1,
        };
      }
      setCartItems(updatedCartItems);
      setItemCount((prevItemCount) => prevItemCount - 1);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setItemCount(0);
  };

  const calcularTotalCarrito = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * parseInt(item.quantity),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        itemCount,
        removeItem,
        clearCart,
        calcularTotalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

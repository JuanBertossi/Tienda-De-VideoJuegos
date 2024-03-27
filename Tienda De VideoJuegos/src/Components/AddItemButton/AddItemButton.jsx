import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const AddItemButton = ({
  product,
  label = "Agregar al carrito",
  quantity,
  handleResetQuantity,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddCart = () => {
    addToCart({ ...product, quantity });
    handleResetQuantity();
  };

  return (
    <button
      onClick={handleAddCart}
      style={{ marginTop: 20, backgroundColor: "black", borderRadius: 20 }}
    >
      {label}
    </button>
  );
};

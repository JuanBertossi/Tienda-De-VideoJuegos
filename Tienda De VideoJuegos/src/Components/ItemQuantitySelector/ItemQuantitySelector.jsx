import React from "react";
import { AddItemButton } from "../AddItemButton/AddItemButton";

export const ItemQuantitySelector = ({ producto }) => {
  {
    const [quantity, setQuantity] = React.useState(1);
    const handleAddProduct = () => {
      setQuantity(quantity + 1);
    };
    const handleSubstractProduct = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    const handleResetQuantity = () => {
      setQuantity(1);
    };
    return (
      <div>
        <button
          onClick={handleSubstractProduct}
          style={{ backgroundColor: "red", borderRadius: 20 }}
        >
          -
        </button>
        <input type="number" value={quantity} disabled />
        <button
          onClick={handleAddProduct}
          style={{ backgroundColor: "green", borderRadius: 20 }}
        >
          +
        </button>
        <AddItemButton
          product={producto}
          quantity={quantity}
          handleResetQuantity={handleResetQuantity}
        />
      </div>
    );
  }
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { getDoc, doc } from "firebase/firestore";
import "./itemDetailContainer.css";
import ItemDetail from "../ItemDetail/itemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto con ID:", itemId);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    obtenerProducto();
  }, [itemId]);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;

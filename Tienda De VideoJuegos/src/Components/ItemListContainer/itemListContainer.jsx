import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client.js";
import { getDocs, collection } from "firebase/firestore";
import "./itemListContainer.css";
import ItemList from "../ItemList/itemList.jsx";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productsRef = collection(db, "productos");
        const data = await getDocs(productsRef);
        const productosData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

  const productosFiltrados = productos.filter((producto) => {
    if (categoria) {
      return producto.category.toLowerCase() === categoria;
    } else {
      return true;
    }
  });

  return <ItemList productos={productosFiltrados} />;
};

export default ItemListContainer;

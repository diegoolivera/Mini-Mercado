import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//css
import "./ItemList.css";
//router
import { Link } from "react-router-dom";
//componentes
import Item from "../Item/Item";
//firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  let objFiltro = useParams();
  let filtro = objFiltro.categoriaId || "Todo";

  useEffect(() => {
    const requestData = async () => {
      let q;
      if (filtro === "Todo") {
        q = query(collection(db, "Productos"));
      } else {
        q = query(collection(db, "Productos"), where("tipo", "==", filtro));
      }
      const querySnapshot = await getDocs(q);
      console.log(objFiltro);
      console.log(querySnapshot.docs);
      const prod = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setProductos(prod);
    };
    requestData();
  }, [filtro]);

  return (
    <div>
      <h2 className="titulo">Productos</h2>
      <div className="items">
        {productos.map((p) => {
          return (
            <Link to={`/detail/${p.id}`}>
              <Item data={p} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;

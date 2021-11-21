import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { cartContext } from "../context/CartContext";

//componentes
import ItemCount from "../ItemCount/ItemCount";

const CardExampleCard = ({ d }) => {
  const [cantProductos, setCantProductos] = useState(0);
  const [confirmar, setConfirmar] = useState(false);
  const { addItem } = useContext(cartContext);

  const onAdd = (cantidad) => {
    setCantProductos(cantidad);
    setConfirmar(true);
    if (cantidad > 0) {
      addItem(d, cantidad);
    }
  };
  return (
    <div className="contenedorDetail">
      <img className="logoDetalle" src={d.imagen} alt="imagen" />
      <div className="selecDetalle">
        <p className="nombre">{d.nombre}</p>
        <p className="desc">{d.descripcion}</p>
        <p className="precio">${d.precio}</p>
        <p>{d.description}</p>
        <div className="selecCant">
          {confirmar ? (
            <Link to="/cart">
              <button className="btn_activo">Confirmar Compra</button>
            </Link>
          ) : (
            <ItemCount
              stock="5"
              initial="1"
              onClick={(cantidad) => onAdd(cantidad)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default CardExampleCard;

import React from "react";

//estilos
import "./Item.css";

const Item = ({ data }) => {
  return (
    <article className="card">
      <div className="contenedorLogo">
        <img className="logoCard" src={data.imagen} alt="imagen" />
      </div>

      <div className="contenedorDescripcion">
        <p className="nombre">{data.nombre}</p>
        <p className="precio">${data.precio}</p>
        <p className="descripcion">{data.descripcion}</p>
      </div>
    </article>
  );
};
export default Item;

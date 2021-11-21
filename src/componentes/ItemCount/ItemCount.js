import React, { useState } from "react";

//css
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onClick }) => {
  const [contador, setContador] = useState(parseInt(initial));

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const desIncrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contenedorContador">
      <div className="contBtns">
        <div>
          <button className="btn" onClick={desIncrementar}>
            <i class="fas fa-minus-circle"></i>
          </button>
          <p>{contador}</p>
          <button className="btn" onClick={incrementar}>
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
        <></>
      </div>

      <button className="btn_activo" onClick={() => onClick(contador)}>
        Agregar Carrito
      </button>
    </div>
  );
};
export default ItemCount;

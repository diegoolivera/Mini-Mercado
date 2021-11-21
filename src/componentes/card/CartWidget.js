import React, { useContext } from "react";
import "./CartWidget.css";
import img from "../../assets/carro.png";
//context
import { cartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidad, cantidadItems } = useContext(cartContext);
  return (
    <div className="contenedor">
      <img className="imagen" src={img} alt="logoCarrito" />
      {cantidad > 0 ? (
        <div className="contenedorCantidad">
          <p className="cantidad">{cantidadItems()}</p>
        </div>
      ) : null}
    </div>
  );
};
export default CartWidget;

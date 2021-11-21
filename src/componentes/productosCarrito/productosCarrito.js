import React, { useContext } from "react";
//css
import "./productosCarrito.css";
//context
import { cartContext } from "../context/CartContext";

const ProductosCarrito = () => {
  const { items, eliminarItem } = useContext(cartContext);

  return (
    <>
      {items.map((i) => {
        return (
          <tr className="fila">
            <td className="mainColum">
              <div className="filaImage">
                <img className="logo" src={i.item.imagen} alt="imagenItem" />
              </div>
              <div className="filaNombre">{i.item.nombre}</div>
            </td>
            <td>
              <div className="filaCantidad">{i.cantidad}</div>
            </td>
            <td>
              <div className="filaPrecio">${i.item.precio}</div>
            </td>

            <td>
              <button
                onClick={() => {
                  eliminarItem(i);
                }}
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ProductosCarrito;

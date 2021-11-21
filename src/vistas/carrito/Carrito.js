import React, { useContext } from "react";
import "./Carrito.css";

//router
import { Link} from "react-router-dom";
//componentes
import ProductosCarrito from "../../componentes/productosCarrito/productosCarrito";

//context
import { cartContext } from "../../componentes/context/CartContext";

const Carrito = () => {
  const { items, cantidadItems, PrecioTotal, borrarTodo } =
    useContext(cartContext);

  return (
    <div>
      <h2 className="titulo">Bienvenido al carrito </h2>
      <div>
        {items.length === 0 ? (
          <div className="fondo">
            <h2 className="aviso">no hay productos en el carrito</h2>
            <Link to="/Inicio">
              <button className="btnVerProductos">Ver Productos</button>
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="cantProductos">
              {" "}
              Cantidad de productos: {cantidadItems()}
            </h2>
            <div className="flex">
              <div className="overflow">
                <table className="tabla">
                  <thead class="cabeceraTabla">
                    <tr>
                      <th>Articulo</th>
                      <th>cantidad</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductosCarrito />
                  </tbody>
                </table>
              </div>

              <article className="resumen">
                <div className="cabeceraResumen">
                  <h2>Resumen</h2>
                </div>
                <div className="detalleResume">
                  <p className="total">Total:${PrecioTotal()}</p>
                  <div className="contenedorBotones">
                    <Link to="/form">
                      <button className="btns active">Comprar</button>
                    </Link>
                    <button
                      className=" btns borrar "
                      onClick={() => borrarTodo()}
                    >
                      Borrar Todo
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;

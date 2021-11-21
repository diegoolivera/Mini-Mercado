import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
//estilos
import "./formulario.css";

const Formulario = () => {
  const { items, PrecioTotal, borrarTodo } = useContext(cartContext);
  const [inputNombre, setInputNombre] = useState("");
  const [inpuTelefono, setInputTelefono] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [idCompra, setIdCompra] = useState("");

  const onChangeNombre = (e) => {
    setInputNombre(e.target.value);
  };
  const onChangeTelefono = (e) => {
    setInputTelefono(e.target.value);
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const confirmarCompra = (e) => {
    e.preventDefault();
    const guardar = async () => {
      const docSave = await addDoc(collection(db, "ordenes"), {
        nombre: inputNombre,
        telefono: inpuTelefono,
        email: inputEmail,
        items: [...items],
        total: PrecioTotal(),
      });

      setIdCompra(docSave.id);
    };
    guardar();
  };

  const validador = () => {
    let bandera = true;
    if (inputNombre === "" || inpuTelefono === "" || inpuTelefono === "") {
      bandera = false;
    }
    return bandera;
  };
  return (
    <div className="contenedorFormulario">
      {idCompra ? (
        <div class Name="contenido">
          <div>
            <p className="compraRealizada">Realizaste la compra</p>
            <p className="numeroCompra">
              Numero de compra: <span className="id">{idCompra}</span>
            </p>
          </div>

          <Link to="/">
            <button className="volverLocal" onClick={() => borrarTodo()}>
              volver al local
            </button>
          </Link>
        </div>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            confirmarCompra(e);
            borrarTodo();
          }}
        >
          <div className="contenidoForm">
            <div>
              <p>Nombre</p>
              <input type="text" name="nombre" onChange={onChangeNombre} />
            </div>

            <div>
              <p>Telefono</p>
              <input
                type="number"
                name="telefono"
                onChange={onChangeTelefono}
              />
            </div>

            <div>
              <p>Email</p>
              <input 
                type="email" 
                name="email" 
                onChange={onChangeEmail} />
            </div>

            <div className="formBotones">
              <Link to="/">
                <input
                  className="cancelar"
                  type="button"
                  value="Cancelar"
                  onClick={() => borrarTodo()}
                />
              </Link>
              <input
                className={validador() ? "active" : "desabilitar"}
                type="submit"
                value="Finalizar Compra"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Formulario;

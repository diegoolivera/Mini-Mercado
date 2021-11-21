import React, { createContext, useState } from "react";
export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const addItem = (nuevoItem, cantidad) => {
    const index = items.findIndex((i) => i.item.id === nuevoItem.id);

    if (index === -1) {
      const listaNuevoItems = [...items, { item: nuevoItem, cantidad }];
      setItems(listaNuevoItems);
    } else {
      const nuevaCantidad = items[index].cantidad + cantidad;
      const listaEdit = items.filter((i) => i.item.id !== items[index].item.id);
      const listaFinal = [
        ...listaEdit,
        { item: items[index].item, cantidad: nuevaCantidad },
      ];
      setItems(listaFinal);
    }
  };

  const borrarTodo = () => {
    setItems([]);
  };

  const PrecioTotal = () => {
    let suma = 0;
    items.forEach((i) => (suma += i.item.precio * i.cantidad));
    setTotal(suma);
    return suma;
  };

  const cantidadItems = () => {
    let cantidad = 0;
    items.forEach((i) => (cantidad += i.cantidad));
    setCantidad(cantidad);
    return cantidad;
  };
  const eliminarItem = (elemento) => {
    const listaNueva = items.filter((p) => p.item.id !== elemento.item.id);
    setItems(listaNueva);
  };

  return (
    <cartContext.Provider
      value={{
        addItem: addItem,
        borrarTodo: borrarTodo,
        cantidadItems: cantidadItems,
        eliminarItem: eliminarItem,
        total: total,
        cantidad: cantidad,
        items: items,
        PrecioTotal: PrecioTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;

import React, { useEffect, useState } from "react";

//componentes
import ItemDetail from "../ItemDetail/ItemDetail"
//firebase
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ({ match }) => {
  let detaId = match.params.id;
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docRef = doc(db, "Productos", detaId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const item = docSnap.data();
        const id = docSnap.id;

        setDetalles({ ...item, id });
      }
    };
    requestData();
  }, [detaId]);

  return <ItemDetail d={detalles} />;
};
export default ItemDetailContainer;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";
// import { getFetch } from "../../helpers/itemsArray";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "items");

    if (idCategoria) {
      const queryFiltro = query(
        collection(db, "items"),
        where("categoria", "==", idCategoria)
      );

      getDocs(queryFiltro)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div className="ItemContainer">
      {loading ? (
        <FadeLoader size={30} />
      ) : (
        <>
          <h1>{props.greeting}</h1>
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/itemsArray";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);

    getFetch()
      .then((res) =>
        setItems(idCategoria ? res.filter((items) => items.categoria === idCategoria): res)
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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

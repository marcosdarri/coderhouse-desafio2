import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../helpers/productosArray";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const onAdd = (count) => {};
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFetch.then((res) => setItems(res)).catch((err) => console.log(err));
  }, []);

  console.log(items);

  return (
    <div className="ItemListContainer">
      <h4>{props.greeting}</h4>
      <ItemCount stock="5" initial="1" onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

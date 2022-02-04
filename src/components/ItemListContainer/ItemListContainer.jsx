import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/itemsArray";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import FadeLoader from 'react-spinners/FadeLoader';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      getFetch()
        .then((res) =>
          setItems(res.filter((items) => items.categoria === idCategoria))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((res) => setItems(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [idCategoria]);

  if(loading){
    return(
      <div className="ItemListContainer">
      <FadeLoader size={30}/>
      </div>
    )
    
  }else{
    return (
      <div className="ItemListContainer">
        <h4>{props.greeting}</h4>
        
        <ItemList items={items} />
      </div>
    );
  }

 
};

export default ItemListContainer;

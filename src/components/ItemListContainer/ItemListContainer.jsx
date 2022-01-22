import React from "react";
import ItemCount from "../ItemCount/ItemCount";

 const ItemListContainer = (props) => {
  const onAdd = (count) =>{
    console.log(count)
  }
    return (
      <div className="ItemListContainer">
        <h4>{props.greeting}</h4>
        <ItemCount stock="5" initial="1" onAdd={onAdd}/>
      </div>
    );
  }

  export default ItemListContainer;
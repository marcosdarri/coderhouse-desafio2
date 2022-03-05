import React from "react";
import Item from "../Item/Item";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ItemList = ({ items }) => {
  // Desarrolla la vista utilizando un array de items y un map

  const listOfItems = items.map((item) => (
    <React.Fragment>
      <br></br>
      <br></br>
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        categoria={item.categoria}
        precio={item.precio}
        pictureUrl={item.pictureUrl}
      />
      <NavLink to={`/detalle/${item.id}`}>
        <Button>Ver detalle</Button>
      </NavLink>
    </React.Fragment>
  ));

  return <ul className="thumbnails">{listOfItems}</ul>;
};

export default ItemList;

import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  // Desarrolla la vista utilizando un array de items y un map

  const listOfItems = items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      pictureUrl={item.pictureUrl}
    />
  ));

  return <ul className="thumbnails">{listOfItems}</ul>;
};

export default ItemList;

import React from "react";

const ItemDetail = ({items} ) => {
  // Desarrolla la vista utilizando un array de items y un map

  return (
    <React.Fragment>
      <h2>Item Detail:</h2>
      <p>{items.titulo}</p>
    </React.Fragment>
  );
};

export default ItemDetail;

import React from "react";

const ItemDetail = ({items} ) => {
  // Desarrolla la vista utilizando un array de items y un map

  return (
    <React.Fragment>
      <div className="thumbnail">
      <h3>{items.title}</h3>
          <img
            src={items.pictureUrl}
            alt={items.title}
            style={{ width: "200px", height: "200px" }}
          />
          <p>{items.description}</p>
          <p>{items.precio}</p>
        </div>
      
    </React.Fragment>
  );
};

export default ItemDetail;

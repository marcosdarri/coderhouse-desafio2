import React from "react";

const Item = ({ id, title, description, precio, categoria, pictureUrl }) => {
  return (
    <React.Fragment>
      <div className="thumbnail">
        <img
          src={pictureUrl}
          alt={title}
          style={{ width: "200px", height: "200px" }}
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{categoria}</p>
        <p>{precio}</p>
      </div>
    </React.Fragment>
  );
};

export default Item;

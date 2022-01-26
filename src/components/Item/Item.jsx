import React from "react";



const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
    <React.Fragment>
      <li id={id} class="span4">
        <div class="thumbnail">
          <img src={pictureUrl} alt={title} style={{width:"200px", height:"200px"}}/>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Item;
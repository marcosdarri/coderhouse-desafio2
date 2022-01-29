import React from "react";

const Item = ({ id, title, description, categoria, pictureUrl }) => {
  return (
    
    <React.Fragment>
     
      <li id={id} className="span4">
        <div className="thumbnail">
          <img
            src={pictureUrl}
            alt={title}
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{categoria}</p>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Item;

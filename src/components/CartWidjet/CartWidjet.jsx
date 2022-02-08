import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidjet = () => {
  const { cartList, isEmpty, cantidadItems } = useCartContext();
  return (
    <React.Fragment>
      {isEmpty(cartList) ? (
        <>
          <Link to="/cart" style={{textDecoration: "none", color: "#000"}}>
            <>
              Carrito
              <img
                src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
            </>
          </Link>
        </>
      ) : (
        <>
        Items: {cantidadItems(cartList)}
        </>
      )}
    </React.Fragment>
  );
};

export default CartWidjet;

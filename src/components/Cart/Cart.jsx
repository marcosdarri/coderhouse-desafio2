import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <React.Fragment>
      { cartList.map(item => <li>{item.title} Item: {item.nombre} Cantidad: {item.cantidad}</li> ) }
        <button onClick={vaciarCarrito} >Vaciar Carrito</button>

    </React.Fragment>
  );
};

export default Cart;
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Button,Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {

  const { cartList, vaciarCarrito, removeItem, isEmpty, precioTotal } = useCartContext()
  return (

    <div className="container">
      {isEmpty(cartList) ? (
        <>
        <h1>Su carrito de compras esta vacio!</h1>
        <Link to="/">
        <Button variant="primary" >Seguir comprando</Button>
        </Link>
        
        </>
      ) : (
        <>
           { cartList.map(item =>
      <Card style={{ width: '18rem' }} key={item.id} className='mx-auto'>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body className="text-center">
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.cantidad}
        </Card.Text>
        <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
      </Card.Body>
    </Card>

       ) }
       <br></br>
       <h3>Precio total ${precioTotal(cartList)}</h3>
      <Button variant="primary" onClick={vaciarCarrito}>Vaciar Carrito</Button>
        </>
      )}
    </div>
    
  );
};


export default Cart;
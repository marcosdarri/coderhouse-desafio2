import React from "react";
import { useCartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    validarEmail: "",
    phone: "",
    name: "",
  });

  const [valido, setValido] = useState(false);

  const { cartList, vaciarCarrito, removeItem, isEmpty, precioTotal } =
    useCartContext();
  const realizarCompra = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders
    let orden = {};

    orden.buyer = dataForm; //{name:'Federico',email: 'f@gmail.com', phone: '1234567890'}
    orden.total = precioTotal(cartList);

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * Number(cartItem.cantidad);
      const cantidad = cartItem.cantidad;

      return {
        id,
        nombre,
        precio,
        cantidad,
      };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, orden).then((resp) => setId(resp.id));

    const queryCollection = collection(db, "items");

    const queryActulizarStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActulizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
          validarEmail: "",
        });
        vaciarCarrito();
      });
    batch.commit();
  };

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const formValido = () => {
    if (
      dataForm.email === dataForm.validarEmail &&
      dataForm.name !== "" &&
      dataForm.email !== "" &&
      dataForm.phone !== ""
    ) {
      setValido(true);
    }else {
      alert(
        "Complete correctamente el formulario antes de realizar la compra!"
      )
    }
  };

  return (
    <div className="container">
      {isEmpty(cartList) ? (
        <>
          <h1>Su carrito de compras esta vacio!</h1>
          <Link to="/">
            <Button variant="primary">Seguir comprando</Button>
          </Link>
        </>
      ) : (
        <>
          {cartList.map((item) => (
            <Card style={{ width: "18rem" }} key={item.id} className="mx-auto">
              <Card.Img variant="top" src={item.pictureUrl} />
              <Card.Body className="text-center">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.cantidad}</Card.Text>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          ))}
          <br></br>
          <h3>Precio total ${precioTotal(cartList)}</h3>
          <Button variant="primary" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
          <br />
          <h2>Por favor llenar formulario:</h2>
          <form onSubmit={realizarCompra}>
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              value={dataForm.name}
            />
            <br />

            <input
              type="number"
              id="celular"
              name="phone"
              placeholder="Celular"
              onChange={handleChange}
              value={dataForm.phone}
            />
            <br />

            <input
              type="email"
              id="Email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={dataForm.email}
            />
            <br></br>
            <input
              type="email"
              id="validarEmail"
              name="validarEmail"
              placeholder="Confirmar email"
              onChange={handleChange}
              value={dataForm.validarEmail}
            />
            <br></br>

            <br />

            {
              !valido ? (
                <Button variant="primary" onClick={formValido}>
                Generar Orden
              </Button>
              ) : (
                <Button variant="success" type="submit" >
                Orden generada exitosamente!
              </Button>
              )
            }

          </form>
        </>
      )}
    </div>
  );
};

export default Cart;

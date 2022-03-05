import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ stock, initial, onAdd }) {
  const number = Number(initial);
  const max = Number(stock);
  const [count, setCount] = useState(number);

  const sumar = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const agregar = () => {
    if (count > 0) {
      onAdd(count);
    } else {
      alert("Seleccione 1 o mas productos antes de agregar al carrito!");
    }
  };

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <Button variant="primary" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="primary" onClick={restar}>
        Restar
      </Button>
      <Button variant="primary" onClick={agregar}>
        Agregar al carrito
      </Button>
    </React.Fragment>
  );
}


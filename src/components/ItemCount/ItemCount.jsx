import React from "react";
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
    const number = Number(initial);
    const max = Number(stock);
    const [count, setCount] = useState(number);

  const sumar = () => {
    if(count<max){
        setCount(count + 1);
    }
  };
  const restar = () => {
    setCount(count - 1);
  };
  return (
    <React.Fragment>
        <h1>{count}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={onAdd(count)}>onAdd</button>
    </React.Fragment>
  );
}

export default ItemCount;

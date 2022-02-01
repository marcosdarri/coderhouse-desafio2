import React from "react";
import { useState } from 'react';

export default function ItemCount({ stock, initial }) {
    const number = Number(initial);
    const max = Number(stock);
    const [count, setCount] = useState(number);

  const sumar = () => {
    if(count<max){
        setCount(count + 1);
    }
  };
  const restar = () => {
    if(count>=1){
      setCount(count - 1);
    }
    
  };
  const onAdd = () => {
    console.log(count);
  };
  return (
    <React.Fragment >
        <h2>Item Count:</h2>
        <h1>{count}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={onAdd} style={{marginBottom: "30px"}}>onAdd</button>
    </React.Fragment>
  );
}


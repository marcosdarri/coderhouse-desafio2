// import React, {useState, useEffect} from 'react';
// import { getFetch } from "../helpers/itemsArray";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   // const [items, setItems] = useState({});
//   // const [loading, setLoading] = useState(true)
//   // const itemId = 1;

//   // useEffect(() => {
//   //     if(itemId){
//   //       getFetch.then((data) => setItems(data.find((item) => item.id===itemId))).catch((err) => console.log(err)).finally(()=> setLoading(false));;
//   //     }else{
//   //       getFetch.then((data) => setItems(data)).catch((err) => console.log(err)).finally(()=> setLoading(false));
//   //     }
//   // }, [itemId]);

//   const [items, setItems] = useState([]);
//   const {productId} = useParams();

//   useEffect(() => {
//     getFetch()
//       .then((data) => {
//         setItems(data.find((item) => item.id === productId));
//       })
//       .catch((err) => console.log(err));
//   }, [productId]);

//   console.log(items)
//   return (
//     <div className="ItemDetailContainer">
//       <h1>Soy el detalle</h1>
//       <ItemDetail items={items} />
//     </div>
//   );
// };

// export default ItemDetailContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/itemsArray";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    // llamada a una api. Tarea asincónica
    if (idItem) {
      getFetch
        .then((res) => setItems(res.find((item) => item.id === idItem)))
        .catch((err) => console.log(err))
        .then((respuesta) => console.log(respuesta));
      //.finally(()=> setloading(false))
    } else {
      getFetch.then((res) => setItems(res)).catch((err) => console.log(err));
      //.then(respuesta => console.log(respuesta))
      //.finally(()=> setloading(false))
    }
  }, [idItem]);

  return (
    <>
      <h2>Item Detail:</h2>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;

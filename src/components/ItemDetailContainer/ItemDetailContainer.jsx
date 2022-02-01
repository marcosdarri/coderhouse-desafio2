import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/itemsArray";
import ItemDetail from "../ItemDetail/ItemDetail";
import FadeLoader from 'react-spinners/FadeLoader';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    // llamada a una api. Tarea asincónica
    if (idItem) {
      getFetch()
        .then((res) => setItems(res.find((item) => item.id === idItem)))
        .catch((err) => console.log(err))
        .then((respuesta) => console.log(respuesta))
        .finally(()=> setLoading(false))
    } else {
      getFetch().then((res) => setItems(res)).catch((err) => console.log(err))
      .then(respuesta => console.log(respuesta))
      .finally(()=> setLoading(true))
    }
  }, [idItem]);

  if(loading){
      return(
        <div className="ItemDetailContainer">
          <FadeLoader size={30}/>
        </div>
        
      )
  }else{
    return (
      <div className="ItemDetailContainer">
        <h2>Item Detail:</h2>
        <ItemDetail items={items} />
        </div>
    );
  }

 
};

export default ItemDetailContainer;

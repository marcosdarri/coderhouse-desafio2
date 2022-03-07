import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    //llamada a una api. Tarea asincónica  
    const db = getFirestore()      
    const itemRef = doc(db, 'items', idItem) 
    getDoc(itemRef)
    .then(resp => setItems( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))               

  }, [idItem]);

  if (loading) {
    return (
      <div className="ItemDetailContainer">
        <FadeLoader size={30} />
      </div>
    );
  } else {
    return (
      <div className="ItemDetailContainer">
        <ItemDetail items={item} />
      </div>
    );
  }
};

export default ItemDetailContainer;

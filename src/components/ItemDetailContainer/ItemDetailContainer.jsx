import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/itemsArray";
import ItemDetail from "../ItemDetail/ItemDetail";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);

    getFetch()
      .then((res) => setItems(res.find((item) => item.id === idItem)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
        <h2>Item Detail:</h2>
        <ItemDetail items={item} />
      </div>
    );
  }
};

export default ItemDetailContainer;

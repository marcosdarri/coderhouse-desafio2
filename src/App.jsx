import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components//NavBar/NavBar";
import CartWidjet from "./components/CartWidjet/CartWidjet";

export default function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidjet />
      </NavBar>
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer greeting="Bienvenidos a la pagina de Marcos Darricarrere" />
    </div>
  );
}


import './App.css';
import { CartWidjet } from './components/CartWidjet';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <div className="App">
        <NavBar>
          <CartWidjet/>
        </NavBar>
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer greeting="Bienvenidos a la pagina de Marcos Darricarrere"/>
    </div>
  );
}



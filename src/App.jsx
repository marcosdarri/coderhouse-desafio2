import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components//NavBar/NavBar";
import CartWidjet from "./components/CartWidjet/CartWidjet";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";


export default function App() {
 
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className="App" style={{backgroundColor: "#F5F5F5"}}>
        <NavBar>
          <CartWidjet />
        </NavBar>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          {/* <Route exact path="/detalle" element={<ItemDetailContainer />} /> */}
          <Route exact path="/categorias/:idCategoria" element={<ItemListContainer />} />
          <Route exact path="/detalle/:idItem" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
  
      </CartContextProvider>
    </BrowserRouter>
  );
}


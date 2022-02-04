import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

//crear un componente

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function agregarAlCarrito(item) {
    //setCartList([...cartList, item]);
    if(isInCart(item.id, cartList)){
        addItem(item, item.cantidad)
    }else{
        setCartList([...cartList, item]);
    }
  }

  function vaciarCarrito() {
    setCartList([]);
  }
  // addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  function addItem(item, quantity) {
    if (isInCart(item.id, cartList)) {
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].id === item.id) {
          cartList[i].cantidad += quantity;
        }
      }
    } else {
      agregarAlCarrito(item);
    }
  }

  // removeItem(itemId) // Remover un item del cart usando su id

  function removeItem(itemId) {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === itemId) {
        cartList.splice(cartList[i]);
      }
    }
  }

  // isInCart: (id) => true|false

  function isInCart(id, items) {
    let answer = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        answer = true;
      }
    }
    return answer;
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

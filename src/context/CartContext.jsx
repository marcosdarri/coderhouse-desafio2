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
    if (isInCart(item.id, cartList)) {
      addItem(item, item.cantidad, item.precio, item.pictureUrl);
    } else {
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
    }
  }

  // removeItem(itemId) // Remover un item del cart usando su id

  function removeItem(itemId) {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === itemId) {
        setCartList(cartList.filter((el) => el.id !== itemId));
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

  // isEmpty // Retorna si el cartList esta vacio o no.

  function isEmpty(cartList) {
    if (cartList.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // precioTotal // Retorna el monto total de todos los items del cartList

  function precioTotal(cartList) {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      total += parseInt(cartList[i].precio) * parseInt(cartList[i].cantidad);
    }
    return total;
  }

  // cantidadItems // Retorna la cantidad total de items en el carrito.

  function cantidadItems(cartList) {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      total += parseInt(cartList[i].cantidad);
    }
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        removeItem,
        isEmpty,
        precioTotal,
        cantidadItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

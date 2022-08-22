import { createContext, useEffect, useState } from "react";



///////////////////////////////////////////////////////////////

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

///////////////////////////////////////////////////////////////

const removeFromCart = (cartItems, product) => {
  //find
  const existingCartItem = cartItems.find((item) => item.id === product.id)  // object {}
  //existingCartItem.quantity === 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
  }
  //existingCartItem.quantity !== 1
  return cartItems.map(cartItem => cartItem.id === product.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}

///////////////////////////////////////////////////////////////

const deleteFromCart = (cartItems, productTodelete) => {

  return cartItems.filter(cartItem => cartItem.id !== productTodelete.id);

}

/////////////////////////////////////////////////////////////////////////////////////////////////

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeCartItem: () => { },
  deleteCartItem: () => { },
  cartCount: 0,
  totalPrice: 0,
})

/////////////////////////////////////////////////////////////////////////////////////////////////

export const CartContextProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    let newTotalPrice = cartItems.reduce((value, item) => value + (item.quantity * item.price), 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeCartItem = (productToRemove) => {
    setCartItems(removeFromCart(cartItems, productToRemove));
  }

  const deleteCartItem = (productTodelete) => {
    setCartItems(deleteFromCart(cartItems, productTodelete));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeCartItem,
    deleteCartItem,
    totalPrice
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
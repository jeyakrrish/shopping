import { createContext, useReducer } from "react";

import { createAction } from '../utils/reducer/reducer.utils';

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
// export const CartContext = createContext();  //IS just eough
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeCartItem: () => { },
  deleteCartItem: () => { },
  cartCount: 0,
  totalPrice: 0,
});

/////////////////////////////////////////////////////////////////////////////////////////////////
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`unhandled exception occured for type ${type}`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
}
/////////////////////////////////////////////////////////////////////////////////////////////////

export const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, totalPrice } = state;

  const setIsCartOpen = (boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
  }

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce((count, item) => count + item.quantity, 0)
    const newTotalPrice = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newTotalPrice
      })
    )
  }

  ////////////////////////////////////////////////////////////

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  }

  const removeCartItem = (productToRemove) => {
    const newCartItems = removeFromCart(cartItems, productToRemove);
    updateCartItems(newCartItems);
  }

  const deleteCartItem = (productTodelete) => {
    const newCartItems = deleteFromCart(cartItems, productTodelete);
    updateCartItems(newCartItems);
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
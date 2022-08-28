import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

//setter fuctions that returns action objects
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = removeFromCart(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const deleteCartItem = (cartItems, productTodelete) => {
  const newCartItems = deleteFromCart(cartItems, productTodelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

//HELPER FUNCTIONS RETURNS cartItems ARRAY
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

const deleteFromCart = (cartItems, productTodelete) =>
  cartItems.filter(cartItem => cartItem.id !== productTodelete.id);
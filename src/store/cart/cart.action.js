import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCartItems = (newCartItems) => {

  const newCartCount = newCartItems.reduce((count, item) => count + item.quantity, 0)
  const newTotalPrice = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
    cartCount: newCartCount,
    totalPrice: newTotalPrice
  })

}

export const setIsCartOpen = (toggle) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !toggle)

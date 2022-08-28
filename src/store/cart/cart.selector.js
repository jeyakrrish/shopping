import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const isCartOpenSelector = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
)

export const CartSliceSelector = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
)

export const cartCountSelector = createSelector(
  [CartSliceSelector],
  (cartItems) => cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
)

export const totalPriceSelector = createSelector(
  [CartSliceSelector],
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)
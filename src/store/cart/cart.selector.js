import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const CartSliceSelector = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice
)
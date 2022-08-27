import { createSelector } from "reselect";

const selectUserReducer = (state)=> state.user;

const selectCurrentuser = createSelector(
  [selectUserReducer],
  (userSlice)=> userSlice.currentUser
)

export const userSelector = createSelector (
  [selectCurrentuser],
  (currentUser)=> currentUser
)
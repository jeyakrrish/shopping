import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase-config";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase-config";

import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const ACTION_TYPES = {
  SetCurrentUser: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SetCurrentUser:
      return {
        ...state,
        currentUser: payload,
      }
      
    default:
      throw new Error(`Unhandled exception type ${type} was ocurred`);
  }
}

const initialValue = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, initialValue);
  const { currentUser } = state;      
  
  const setCurrentUser = (user) => {
    dispatch(createAction(ACTION_TYPES.SetCurrentUser, user));
  }

  useEffect(
    () => {
      const subscribe = onAuthStateChangedListener((user) => {
        if (user) createUserDocumentFromAuth(user);

        setCurrentUser(user);
      });
      return subscribe;
    }, [] );

  const value = {
    currentUser,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase-config";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase-config";

//as the actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () => {
      const subscribe = onAuthStateChangedListener((user) => {
        if (user) createUserDocumentFromAuth(user);

        setCurrentUser(user);
        // console.log("User autheticated data :", user);
      });
      return subscribe;
    }, []
  )

  const value = {
    currentUser,
    setCurrentUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
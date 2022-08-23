import { createContext, useState, useEffect } from "react";

import { addCollectionDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase-config";

// import SHOP_DATA from '../shop-data';        // one time usage


//ACTUAL CONTEXT
export const CategoryContext = createContext({
  categoryMap: {},
});

//PROVIDER COMPONENT
export const CategoryContextProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  const value = {
    categoryMap,
  }

  useEffect(()=>{
    const getCategoryMap = async ()=> {
      const categoryMap = await getCollectionAndDocuments();
      setCategoryMap(categoryMap);
    }
    getCategoryMap();
  },[]);

// one time usage for upload date to firebase
// useEffect(()=>{
//   addCollectionDocuments("categories", SHOP_DATA);
// },[])

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}
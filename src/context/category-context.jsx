import { createContext, useReducer, useEffect } from "react";

import { addCollectionDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase-config";

// import SHOP_DATA from '../shop-data';        // one time usage


//ACTUAL CONTEXT
export const CategoryContext = createContext({
  categoryMap: {},
});
///////////////////////////////////////////////////////
const CATEGORY_ACTION_TYPES = {
  CATEGORYMAP :'CATEGORYMAP',
}

const categoryReducer = (state, action) =>{
  const { type, payload } = action;

  switch(type) {
    case CATEGORY_ACTION_TYPES.CATEGORYMAP:
      return {
        ...state,
        categoryMap: payload,
      }
    default:
      throw new Error(`unhandled exception occured for type ${type}`);
  }
}

const initialValue = {
  categoryMap : {},
}
///////////////////////////////////////////////////////

export const CategoryContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(categoryReducer, initialValue);
  const {categoryMap} = state;

  const value = {
    categoryMap,
  }

  const setCategoryMap = (categoryMap) => {
    dispatch ({type:CATEGORY_ACTION_TYPES.CATEGORYMAP, payload:categoryMap})
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
import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

//ACTUAL CONTEXT
export const ProductsContext = createContext({
  products: [],
});

//PROVIDER COMPONENT
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  const value = {
    products,
    // setProducts,
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
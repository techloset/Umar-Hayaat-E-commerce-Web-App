import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FetchDataContext = createContext();
export default function FetchDataContextProvider({ children }) {
  const [fetchedProducts, setFetchedProducts] = useState([]);

  // const arrayOfData = [];

  const fetchProductsFromAPI = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      // console.log("Response", res);
      const { data } = res;
      // console.log("data", data);

      // arrayOfData.push(data);
      setFetchedProducts(data);

      //   console.log("fetchProducts", fetchProducts);
    } catch (err) {
      console.error("Error while fetching products ", err);
    }
  };

  useEffect(() => {
    fetchProductsFromAPI();
  }, []);
  
//   useEffect(() => {
//     console.log("fetchProducts", fetchedProducts);
//   }, [fetchedProducts]);

  return (
    <>
      <FetchDataContext.Provider value={{ fetchedProducts, setFetchedProducts }}>
        {children}
      </FetchDataContext.Provider>
    </>
  );
}

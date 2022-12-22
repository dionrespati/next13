import React from "react";
import Product from "./components/product";
import { notFound } from "next/navigation";
import NoData from "../../components/noData";

const getSearchProduct = async (searchTerm) => {
  const searchResult = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
  return searchResult.json();
};
  
const SearchProduct = async ({ params : {searchTerm} }) => {
  const { products } = await getSearchProduct(searchTerm);  
  //console.log({products});

  if(products.length === 0) {
    return (
      <>
        <NoData message="We can not find the products you are looking for, please try another" />
        <div>Okeee...</div>
      </>
    );
  }  

  return (
    <>
      <Product 
        products={products}
      />
    </>
  );
};

export default SearchProduct;
import React from "react";
import Product from "../../../../components/products/product";
import { notFound } from "next/navigation";
import NoData from "../../../../components/products/noData";

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
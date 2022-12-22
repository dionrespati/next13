import React from "react";
import ProductDetail from "./components/productDetail";
import { notFound } from "next/navigation";

const getProductsById = async (id) => {
  const detailProduct = await fetch(`https://dummyjson.com/products/${id}`, {next: {revalidate: 120}});
  return detailProduct.json();
};
  
const ProductsById = async ({ params }) => {
  const dataProduct = await getProductsById(params.id);  
  console.log({dataProduct});
  if(!dataProduct.id) return notFound();

  return (
    <>
      <ProductDetail 
        dataProduct={dataProduct}
      />
    </>
  );
};

export default ProductsById;
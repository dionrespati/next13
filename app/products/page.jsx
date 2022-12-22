import React from 'react';
import Product from '../products/components/product';

const getProducts = async () => {
  const products = await fetch('https://dummyjson.com/products?skip=5&limit=100', { next: { revalidate: 20 } });
  return products.json();
};


const Products = async () => {
  const { products } = await getProducts();  

  if(products.length === 0) return <div>We can not find the products you are looking for..</div>
  
  return (
    <>
      <Product 
        products={products}
      />
    </>  
  );
}

export default Products;
import React from 'react';
import Category from '../../components/products/category';
import ProductTemplate from './productTemplate';

const getAllProductCategories = async () => {
  const data = await fetch('https://dummyjson.com/products/categories', { next: { revalidate: 20 } });
  return data.json();
};

const ProductLayout = async ({children}) => {

  const data = await getAllProductCategories();  

  return (
    <>
      <ProductTemplate>
        <Category 
          listCategories={data}
        />
        {children}
      </ProductTemplate>
    </>
  )
}

export default ProductLayout
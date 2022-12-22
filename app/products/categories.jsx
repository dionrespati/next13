import React from 'react';

const getAllProductCategories = async () => {
  const data = await fetch('https://dummyjson.com/products/categories', { next: { revalidate: 20 } });
  return data.json();
};

const Categories = async () => {
  const data = await getAllProductCategories();  
  return (
    <div>categories</div>
  );
};

export default Categories
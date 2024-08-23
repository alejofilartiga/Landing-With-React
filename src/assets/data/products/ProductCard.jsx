import React from 'react';

import { products } from './productsData';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

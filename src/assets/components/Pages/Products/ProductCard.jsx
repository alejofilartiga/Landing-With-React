import React from 'react';


import {
    Card,
    CardImg,
    CardProduct,
    CardPriceContainer,
    CardPrice,
    CardShop,
    ProductsContainer
} from './productsStyle.js'

import { products } from '../../../data/products/productsData.js';

import CartIcon from './img/carticon.png'

const ProductCard = ({ product }) => {
  return (
    <Card className="card">
      <CardImg src={product.img} alt={product.name} />
      <CardProduct>{product.name}</CardProduct>
      <CardPriceContainer>
        <CardPrice>$ {product.price}</CardPrice>
        <CardShop src={CartIcon} />
      </CardPriceContainer>
    </Card>
  );
};

const ProductList = () => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductList;

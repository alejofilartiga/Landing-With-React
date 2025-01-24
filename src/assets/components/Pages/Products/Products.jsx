import React from 'react'
import {
        ProductsSection,
        TitleContainer,
        InfoSection,
        TitleSection,
        ProductsContainer

} from './productsStyle'

import ProductList from './ProductCard'


function Products() {
  return (
    <>
      <ProductsSection>
        <TitleContainer>
          <TitleSection>Nuestros Exitos</TitleSection>
          <InfoSection>Conoce a nuestros productos estrellas y enamorate junto a ellos en cada comida</InfoSection>
        </TitleContainer>
        <ProductList />
      </ProductsSection>
    </>
  )
}

export default Products
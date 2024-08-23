import React from 'react'
import {
        ProductsSection,
        TitleContainer,
        InfoSection,
        TitleSection,

} from './productsStyle'

import { products } from '../../../data/products/productsData'




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
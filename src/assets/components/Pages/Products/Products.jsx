import React from 'react'
import {
        ProductsSection,
        TitleContainer,
        InfoSection,
        TitleSection,
        ProductsContainer,
        Card,
        CardImg,
        CardProduct,
        CardPriceContainer,
        CardPrice,
        CardShop

} from './productsStyle'

import CartIcon from './img/carticon.png'

import Cheddar from './img/taucheddar.jpg'
import BigTau from './img/bigtau.webp'
import Barbacoa from './img/barbacoa.png'
import MayoAjo from './img/mayoajo.webp'
import MosDulce from './img/mosdulce.jpg'
import Caesar from './img/taucesar.jpg'
import Chimichurri from './img/tauchimichurri.jpg'
import Ranch from './img/tauranch.webp'
import Teriyaki from './img/teriyaki.webp'

function Products() {
  return (
    <>
      <ProductsSection>
        <TitleContainer>
          <TitleSection>Nuestros Exitos</TitleSection>
          <InfoSection>Conoce a nuestros productos estrellas y enamorate junto a ellos en cada comida</InfoSection>
        </TitleContainer>
        <ProductsContainer>
          <Card>
            <CardImg src={Cheddar}/>
            <CardProduct>Cheddar</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶4̶0̶ $20</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={BigTau}/>
            <CardProduct>Big Tau</CardProduct>
            <CardPriceContainer>
              <CardPrice>$40</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={MayoAjo}/>
            <CardProduct>Mayonesa Ajo</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶4̶0̶ $20</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={MosDulce}/>
            <CardProduct>Mostaza Dulce</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶4̶0̶ $10</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={Caesar}/>
            <CardProduct>Caesar</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶5̶0̶  $20</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={Chimichurri}/>
            <CardProduct>Chimichurri</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶4̶0̶ $20</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={Ranch}/>
            <CardProduct>Ranch</CardProduct>
            <CardPriceContainer>
              <CardPrice>$̶4̶0̶ $05</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
          <Card>
            <CardImg src={Teriyaki}/>
            <CardProduct>Teriyaki</CardProduct>
            <CardPriceContainer>
              <CardPrice>$30</CardPrice>
              <CardShop src={CartIcon} />
            </CardPriceContainer>
          </Card>
        </ProductsContainer>
      </ProductsSection>
    </>
  )
}

export default Products
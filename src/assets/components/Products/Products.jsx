import {
        ProductSection,
        TitleProduct,
        ProductsContainer,
        CardProduct,
        CardImg,
        CardTitle,
        CardStars
} from './productsStyle'

import Cesar from './img/taucesar.jpg'
import Cheddar from './img/taucheddar.jpg'
import Chimichurri from './img/tauchimichurri.jpg'
import Ranch from './img/tauranch.webp'

import Stars from './img/starproduct.png'

function Products() {
  return (
    <>
      <ProductSection id='products'>
        <TitleProduct>NUESTROS MAS ELEGIDOS:</TitleProduct>
        <ProductsContainer>
          <CardProduct>
            <CardImg src={Cesar} />
            <CardTitle>Cesar</CardTitle>
            <CardStars src={Stars} />
          </CardProduct>
          <CardProduct>
            <CardImg src={Cheddar} />
            <CardTitle>Cheddar</CardTitle>
            <CardStars src={Stars} />
          </CardProduct>
          <CardProduct>
            <CardImg src={Chimichurri} />
            <CardTitle>Chimichurri</CardTitle>
            <CardStars src={Stars} />
          </CardProduct>
          <CardProduct>
            <CardImg src={Ranch} />
            <CardTitle>Ranch</CardTitle>
            <CardStars src={Stars} />
          </CardProduct>
        </ProductsContainer>
      </ProductSection>
    </>
  )
}

export default Products
import {
  HeroSection,
  TitleContainer,
  ImageContainer,
  ImageHero
} from './heroStyle'

import ImageLeft from './img/heroimg.jpg'
import ImageRight from './img/heroimg2.jpg'

function Hero() {
  return (
    <>
      <HeroSection>
        <TitleContainer>¡BIENVENIDOS AL SABOR!</TitleContainer>
        <ImageContainer>
          <ImageHero src={ImageLeft} />
          <ImageHero src={ImageRight}/>
        </ImageContainer>
      </HeroSection>
    </>
  )
}

export default Hero
import {
        FeaturesSection,
        TitleFeature,
        FeaturesContainer,
        CardFeature,
        CardImg,
        CardTitle,
        CardStars,
} from './featuresStyle'

import Cesar from './img/taucesar.jpg'
import Cheddar from './img/taucheddar.jpg'
import Chimichurri from './img/tauchimichurri.jpg'
import Ranch from './img/tauranch.webp'

import Stars from './img/starproduct.png'

function Features() {
  return (
    <>
      <FeaturesSection id='features'>
        <TitleFeature>NUESTROS MAS ELEGIDOS:</TitleFeature>
        <FeaturesContainer>
          <CardFeature>
            <CardImg src={Cesar} />
            <CardTitle>Cesar</CardTitle>
            <CardStars src={Stars} />
          </CardFeature>
          <CardFeature>
            <CardImg src={Cheddar} />
            <CardTitle>Cheddar</CardTitle>
            <CardStars src={Stars} />
          </CardFeature>
          <CardFeature>
            <CardImg src={Chimichurri} />
            <CardTitle>Chimichurri</CardTitle>
            <CardStars src={Stars} />
          </CardFeature>
          <CardFeature>
            <CardImg src={Ranch} />
            <CardTitle>Ranch</CardTitle>
            <CardStars src={Stars} />
          </CardFeature>
        </FeaturesContainer>
      </FeaturesSection>
    </>
  )
}

export default Features
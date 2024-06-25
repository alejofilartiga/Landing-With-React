import {
        FooterContainer,
        ImgFooter,
        InfoContainer,
        SocialContainer,
        TitleSocial,
        SocialImgContainer,
        SocialImg,
        DataContainer,
        TitleData
} from './footerStyle'

import TauFooterImg from './img/taufooter.png';
import FacebookImg from './img/facebook.png';
import InstagramImg from './img/instagram.png';
import WhatsappImg from './img/whatsapp.png'

function Footer() {
  return (
    <>
      <FooterContainer id='footer'>
        <ImgFooter src={TauFooterImg}/>
        <InfoContainer>
          <SocialContainer>
            <TitleSocial>¡Seguinos en Redes!</TitleSocial>
            <SocialImgContainer>
              <a><SocialImg src={FacebookImg}/></a>
              <a><SocialImg src={WhatsappImg}/></a>
              <a><SocialImg src={InstagramImg}/></a>
            </SocialImgContainer>
          </SocialContainer>
          <DataContainer>
            <TitleData>J.Grippa 1623</TitleData>
            <TitleData>Villa Rosa - Pilar | Bs.As. Argentina (CP 1631)</TitleData>
            <TitleData>Tel. 0348-4461007</TitleData>
          </DataContainer>
        </InfoContainer>
      </FooterContainer>
    </>
  )
}

export default Footer
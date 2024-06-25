import {HeaderContainer, 
        NavContainer, 
        ToggleMenu,
        LinksContainer,
        LinkStyle,
        TauImg,
        CartIcon
         } from "./headerStyle";

import TauNav from './img/taunav.png'
import ToggleImage from './img/togglemenu.png'
import CartImage from './img/carticon.png'
import Products from "../Products/Products";
import Footer from "../Footer/Footer";



function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <ToggleMenu src={ToggleImage}/>
          <LinksContainer>
            <LinkStyle href="#products">Productos</LinkStyle>
            <TauImg src={TauNav}/>
            <LinkStyle href="#footer">Contacto</LinkStyle>
          </LinksContainer>
          <CartIcon src={CartImage} />
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
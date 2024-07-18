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
import {Link} from 'react-router-dom';


function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <ToggleMenu src={ToggleImage}/>
          <LinksContainer>
            <Link to='home'>Inicio</Link>
            <Link to='products'>Productos</Link>
            <TauImg src={TauNav}/>
            <Link to='contact'>Contacto</Link>
            <Link to='about'>Nosotros</Link>
          </LinksContainer>
          <CartIcon src={CartImage} />
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
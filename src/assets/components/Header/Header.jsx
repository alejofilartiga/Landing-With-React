import {HeaderContainer, 
  NavContainer, 
  TauImg,
  CartIcon,
  LinkStyle,
  LinksContainer
   } from "./headerStyle";

import TauNav from './img/taunav.png'
import CartImage from './img/carticon.png'

import { MenuProvider } from '../MenuToggle/MenuContext';
import DropdownMenu from '../MenuToggle/DropMenu';


function Header() {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <MenuProvider>
            <DropdownMenu/>
          </MenuProvider>
          <TauImg src={TauNav}/>
          <CartIcon src={CartImage} />
        </NavContainer>
      </HeaderContainer>
    </>
  )
}

export default Header
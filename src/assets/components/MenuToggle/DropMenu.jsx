
import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';

import {
        LinksContainer,
        ToggleMenu
} from './toggleStyle'

import {Link} from 'react-router-dom';

import Icon from './img/togglemenu.png'


const DropdownMenu = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const Linkstyle = {
    fontSize: "20px",
    color: "White",
    textDecoration: "None",

  }
  return (
    <div>
      <ToggleMenu src={Icon} onClick={toggleMenu}/>
      {isOpen && (
       <LinksContainer>
            <Link style={Linkstyle} to='home'>Inicio</Link>
            <Link style={Linkstyle} to='products'>Productos</Link>
            <Link style={Linkstyle} to='contact'>Contacto</Link>
            <Link style={Linkstyle} to='about'>Nosotros</Link>
       </LinksContainer>
      )}
    </div>
  );
};

export default DropdownMenu;
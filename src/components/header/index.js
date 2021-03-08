import React from 'react';
import './styles.css';
import Logo from '../../objects/logo';
import Sobre from '../../objects/sobre';
import Menu from '../../objects/menu';




const Header = () => (
    <header className="header">
      <Logo />
      <Sobre />
      <Menu />
    </header>
);



export default Header;
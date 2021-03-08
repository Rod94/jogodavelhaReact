import React from 'react';
import './styles.css';
import Logo from '../../objects/logo';
import Sobre from '../../objects/sobre';
import Menu from '../../objects/menu';



const Header = () => {
  return (
    <header className="header-jogo">
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
}



export default Header;
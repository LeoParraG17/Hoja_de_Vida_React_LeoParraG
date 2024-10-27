import React from 'react';
import Nav from './Nav';
import './Header.css';

const Header = () => (
  <header>
    <h1>Leonardo Parra Galeano</h1>
    <h2>Tecnologo en sistemas de la infomacion</h2>
    <img src="foto_hoja_vida.jpg" alt="Tu foto" />
    <Nav />
  </header>
);

export default Header;
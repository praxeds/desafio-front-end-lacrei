import React from 'react';
import { Navbar } from "./styled";

function Nav() {
  return (
    <Navbar>
      <h1>Lacrei</h1>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Pessoa Usuária</a></li>
        <li><a href='#'>Profissional</a></li>
      </ul>
    </Navbar>
  );
}

export default Nav;

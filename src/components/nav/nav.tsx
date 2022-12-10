import { NavbarSection } from "./styled";
import { useState, useEffect } from 'react';

function Nav() {  
  const handleClick = (newTitle : string, className : string) => (event : any) => {
    document.title = newTitle;

    //Removes the class active from all elements
    const activeEl = document.querySelectorAll('.active');
    activeEl.forEach((el) => {
      el.classList.remove('active')
    })

    //Adds the class active to the clicked element
    const sameEl = document.querySelectorAll(className);
    sameEl.forEach((el) => {
      el.classList.add('active')
    })
  }
  return (
    <NavbarSection>
      <h1 className="home" onClick={handleClick('/', '.home.el')}>Lacrei</h1>
      <ul>
        <li><a className="home el" onClick={handleClick('Home | Desafio Lacrei', '.home.el')}>Home</a></li>
        <li><a className="user el" onClick={handleClick('Pessoa Usuária | Desafio Lacrei', '.user.el')}>Pessoa Usuária</a></li>
        <li><a className="pro el" onClick={handleClick('Profissional | Desafio Lacrei', '.pro.el')}>Profissional</a></li>
      </ul>
    </NavbarSection>
  );
}

export default Nav; 
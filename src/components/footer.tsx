import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { FooterSection, NavItem } from '../Styles/Styles';

import Instagram from '../Assets/Icons/Instagram.svg';
import Facebook from '../Assets/Icons/Facebook.svg';
import LinkedIn from '../Assets/Icons/LinkedIn.svg';

export default function Footer() {
  const [activePage, setActivePage] = useState('');
  let location = useLocation();
  useEffect(() => {
    setActivePage(location.pathname)
  }, [location]);

  return (
    <FooterSection>
      <ul className="nav">
      <NavItem
          activepath={activePage === '/' ? "true" : "false"}
        >
          <NavLink to='/'> Home </NavLink>
        </NavItem>
        <NavItem
          activepath={activePage === '/pessoa-usuaria' ? "true" : "false"}
        >
          <NavLink to='/pessoa-usuaria'> Pessoa Usuária </NavLink>
        </NavItem>
        <NavItem
          activepath={activePage === '/profissional' ? "true" : "false"}
        >
          <NavLink to='/profissional'> Profissional </NavLink>
        </NavItem>
      </ul>
      <div className="icons">
        <a target="_blank" href="https://www.instagram.com/lacrei.saude"><img src={Instagram} alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/lacrei.saude"><img src={Facebook} alt="Facebook" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/lacrei"><img src={LinkedIn} alt="LinkedIn" /></a>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterSection>
  );
}
import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { NavSection, NavItem } from '../Styles/Styles';

export default function Nav() {
  const [activePage, setActivePage] = useState('');
  let location = useLocation();
  useEffect(() => {
    setActivePage(location.pathname)
  }, [location]);

  return (
    <NavSection>
      <h1><NavLink to={'/'}>Lacrei</NavLink></h1>
      <ul>
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
    </NavSection>
  );
}

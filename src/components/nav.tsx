import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { NavSection, ListItem } from '../Styles/Styles';

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
        <ListItem
          activepath={activePage === '/' ? "true" : "false"}
        >
          <NavLink to='/'> Home </NavLink>
        </ListItem>
        <ListItem
          activepath={activePage === '/pessoa-usuaria' ? "true" : "false"}
        >
          <NavLink to='/pessoa-usuaria'> Pessoa Usuária </NavLink>
        </ListItem>
        <ListItem
          activepath={activePage === '/profissional' ? "true" : "false"}
        >
          <NavLink to='/profissional'> Profissional </NavLink>
        </ListItem>
      </ul>
    </NavSection>
  );
}

import { NavbarSection } from "./styled";

import {handleClick} from '../functions'

function Nav() {  
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
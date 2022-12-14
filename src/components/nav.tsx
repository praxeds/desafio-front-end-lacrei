import { NavbarSection } from "../stylesheets/nav";

function Nav() {  
  return (
    <NavbarSection>
      <h1 className="home">Lacrei</h1>
      <ul>
        <li><a className="home el">Home</a></li>
        <li><a className="user el">Pessoa Usuária</a></li>
        <li><a className="pro el">Profissional</a></li>
      </ul>
    </NavbarSection>
  );
}

export default Nav; 
import { NavbarSection } from "./styled";

function Nav() {  
  return (
    <NavbarSection>
      <h1 className="home">Lacrei</h1>
      <ul>
        <li><a className="home">Home</a></li>
        <li><a className="user">Pessoa Usuária</a></li>
        <li><a className="pro">Profissional</a></li>
      </ul>
    </NavbarSection>
  );
}

export default Nav; 
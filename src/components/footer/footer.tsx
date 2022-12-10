import { FooterSection } from "./styled";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <FooterSection>
      <div className="nav">
        <a className="home">Home</a>
        <a className="user">Pessoa Usuária</a>
        <a className="pro">Profissional</a>
      </div>
      <div className="icons">
        <a target="_blank" href="https://www.instagram.com/lacrei.saude"><RiInstagramLine/></a>
        <a target="_blank" href="https://www.facebook.com/lacrei.saude"><RiFacebookCircleLine/></a>
        <a target="_blank" href="https://www.linkedin.com/company/lacrei"><RiLinkedinBoxLine/></a>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterSection>
  );
}

export default Footer;

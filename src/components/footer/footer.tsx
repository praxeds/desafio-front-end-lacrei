import { FooterSection } from "./styled";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <FooterSection>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Pessoa Usuária</a>
        <a href="#">Profissional</a>
      </div>
      <div className="icons">
        <a href="#"><RiInstagramLine/></a>
        <a href="#"><RiFacebookCircleLine/></a>
        <a href="#"><RiLinkedinBoxLine/></a>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterSection>
  );
}

export default Footer;

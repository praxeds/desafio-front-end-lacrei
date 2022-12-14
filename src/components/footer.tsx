import { FooterSection } from '../Styles/Styles';

import Instagram from '../Assets/Icons/Instagram.svg';
import Facebook from '../Assets/Icons/Facebook.svg';
import LinkedIn from '../Assets/Icons/LinkedIn.svg';

export default function Footer() {
  return (
    <FooterSection>
      <div className="nav">
        <a className="home el">Home</a>
        <a className="user el">Pessoa Usuária</a>
        <a className="pro el">Profissional</a>
      </div>
      <div className="icons">
        <a target="_blank" href="https://www.instagram.com/lacrei.saude"><img src={Instagram} alt="Instagram" /></a>
        <a target="_blank" href="https://www.facebook.com/lacrei.saude"><img src={Facebook} alt="Facebook" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/lacrei"><img src={LinkedIn} alt="LinkedIn" /></a>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterSection>
  );
}
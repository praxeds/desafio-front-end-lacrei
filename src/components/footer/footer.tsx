import { FooterSection } from "./styled";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
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
    <FooterSection>
      <div className="nav">
        <a className="home el" onClick={handleClick('Home | Desafio Lacrei', '.home.el')}>Home</a>
        <a className="user el" onClick={handleClick('Pessoa Usuária | Desafio Lacrei', '.user.el')}>Pessoa Usuária</a>
        <a className="pro el" onClick={handleClick('Profissional | Desafio Lacrei', '.pro.el')}>Profissional</a>
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

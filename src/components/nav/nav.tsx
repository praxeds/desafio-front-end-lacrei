import { NavbarSection } from "./styled";

function Nav() {  
  const setNewTitle = (title : string) => {
    document.title = title;
  }
  const resetActiveLinks = () => {
    const activeEl: Element[] = Array.from(document.querySelectorAll('.active'));
    for (const element of activeEl) {
      element.classList.remove('active');
    }
  }


  const homeEl: Element[] = Array.from(document.querySelectorAll('.home'));
  const userEl: Element[] = Array.from(document.querySelectorAll('.user'));
  const proEl: Element[] = Array.from(document.querySelectorAll('.pro'));


  for (const element of homeEl) {
    element.addEventListener('click', () => {
      setNewTitle('Home | Desafio Lacrei');
      resetActiveLinks();
      element.classList.add('active');
    });
  }
  for (const element of userEl) {
    element.addEventListener('click', () => {
      setNewTitle('Pessoa Usuária | Desafio Lacrei');
      resetActiveLinks();
      element.classList.add('active');
    });
  }
  for (const element of proEl) {
    element.addEventListener('click', () => {
      setNewTitle('Profissional | Desafio Lacrei');
      resetActiveLinks();
      element.classList.add('active');
    });
  }


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
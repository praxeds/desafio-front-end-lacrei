import { HomeSection } from "./styled";
import image from '../../assets/static/home.87217388.svg';

function Home() {
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
    <HomeSection>
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="btnContainer">
            <a className="userBtn user" onClick={handleClick('Pessoa Usuária | Desafio Lacrei', '.user.el')}>Pessoa Usuária</a>
            <a className="proBtn pro" onClick={handleClick('Profissional | Desafio Lacrei', '.pro.el')}>Profissional</a>
        </div>
      </div>

      <div>
        <img src={image} loading="lazy" />
      </div>
    </HomeSection>
  );
}

export default Home;

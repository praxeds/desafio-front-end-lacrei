import { HomeSection } from "../stylesheets/home";
import image from '../assets/static/home.87217388.svg';

function Home() {
  return (
    <HomeSection className="currentSection" id="home">
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="btnContainer">
            <a className="userBtn user">Pessoa Usuária</a>
            <a className="proBtn pro">Profissional</a>
        </div>
      </div>

      <div>
        <img src={image}/>
      </div>
    </HomeSection>
  );
}

export default Home;

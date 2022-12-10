import { HomeSection } from "./styled";
import image from '../../assets/static/home.87217388.svg';

import {handleClick} from '../functions'

function Home() {
  return (
    <HomeSection className="currentSection" id="home">
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="btnContainer">
            <a className="userBtn user" onClick={handleClick('Pessoa Usuária | Desafio Lacrei', '.user.el', 'usuario')}>Pessoa Usuária</a>
            <a className="proBtn pro" onClick={handleClick('Profissional | Desafio Lacrei', '.pro.el', 'profissional')}>Profissional</a>
        </div>
      </div>

      <div>
        <img src={image}/>
      </div>
    </HomeSection>
  );
}

export default Home;

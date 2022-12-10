import { HomeSection } from "./styled";
import image from '../../assets/static/home.87217388.svg';

import {handleClick} from '../functions'

function Home() {
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

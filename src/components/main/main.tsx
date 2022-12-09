import { MainSection } from "./styled";
import image from '../../assets/static/home.87217388.svg';

function Main() {
  return (
    <MainSection>
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="btnContainer">
            <a className="userBtn" href="/pessoa-usuaria">Pessoa Usuária</a>
            <a className="proBtn" href="/profissional">Profissional</a>
        </div>
      </div>

      <div>
        <img src={image} alt="ois" />
      </div>
    </MainSection>
  );
}

export default Main;

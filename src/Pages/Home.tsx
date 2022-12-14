import { HomeSection, BtnContainer } from '../Styles/Styles';
import Button from '../Components/HomeButton';
import image from '../Assets/Static/HomeVector.svg';

export default function Home() {
  return (
    <HomeSection className="currentSection" id="home">
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <BtnContainer>
          <Button
            BtnClass='userBtn'
            title='Pessoa Usuária'
            to="/pessoa-usuaria"
          />
          <Button
            BtnClass='proBtn'
            title='Profissional'
            to="/profissional"
          />
        </BtnContainer>
      </div>

      <div>
        <img src={image} />
      </div>
    </HomeSection>
  );
}
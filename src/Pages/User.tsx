import { UserSection } from '../Styles/Styles';
import image from '../Assets/Static/UserVector.svg';

export default function User() {
  return (
    <UserSection>
      <div>
        <h2>Pessoa Usuária</h2>
        <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
      </div>

      <div>
        <img src={image}/>
      </div>
    </UserSection>
  );
}
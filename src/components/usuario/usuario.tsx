import { UserSection } from "./styled";
import image from '../../assets/static/pessoaUsuariaImg.16f76b21.svg';

function User() {
  return (
    <UserSection className="noDisplay" id="usuario">
      <div>
        <h2>Pessoa Usuária</h2>
        <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
      </div>

      <div>
        <img src={image} loading="lazy" />
      </div>
    </UserSection>
  );
}

export default User;
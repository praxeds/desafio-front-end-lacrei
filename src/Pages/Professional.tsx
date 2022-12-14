import { ProfessionalSection } from '../Styles/Styles';
import image from '../Assets/Static/ProfessionalVector.svg';


export default function Professional() {
  return (
    <ProfessionalSection>
      <div>
        <h2>Profissional</h2>
        <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
      </div>

      <div>
        <img src={image} alt="Ilustração"/>
      </div>
    </ProfessionalSection>
  );
}


import { ProfissionalSection } from "./styled";
import image from '../../assets/static/profissional.6700284d.svg';

function Professional() {
  return (
    <ProfissionalSection className="noDisplay" id="profissional">
      <div>
        <h2>Profissional</h2>
        <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
      </div>

      <div>
        <img src={image}/>
      </div>
    </ProfissionalSection>
  );
}

export default Professional;
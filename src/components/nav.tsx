import { NavSection } from '../Styles/Styles';

export default function Nav() {
  return (
    <NavSection>
      <h1 className="home">Lacrei</h1>
      <ul>
        <li><a>Home</a></li>
        <li><a>Pessoa Usuária</a></li>
        <li><a>Profissional</a></li>
      </ul>
    </NavSection>
  );
}

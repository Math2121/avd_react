import { Container } from "./styles";
import Logo from '../assets/logo.png'
import { PlusSmIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <Container>
      <header>
        <nav>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="btn-wrapper">
            <button className="btn-header">Incluir  <PlusSmIcon className="icon-header"/></button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;

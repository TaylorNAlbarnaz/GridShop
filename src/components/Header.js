import logo from '../logo.webp';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Loja"/>
      <p>Seja bem vindo, <span>Usuário!</span></p>
    </header>
  );
}

export default Header;
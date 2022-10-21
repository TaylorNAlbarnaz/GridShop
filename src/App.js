import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo da Loja"/>
        <p>Seja bem vindo, <span>Usuário!</span></p>
      </header>

      <aside></aside>
    </div>
  );
}

export default App;

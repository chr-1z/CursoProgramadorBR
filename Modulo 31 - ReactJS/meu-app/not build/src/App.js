import './App.css';
import Header from './Header';

function App() {
  return (
    <Header name="Minha Loja" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header name="Minha Loja" links={["Sobre", "Comprar", "Contato"]}></Header>
      <Counter count={5}></Counter>
    </div>
  );
}

export default App;

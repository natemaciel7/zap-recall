import React, { useState } from "react";
import Deck from "./components/Deck";
import ProgressBar from "./components/ProgressBar";
import logo from "./assets/logo.png"; 
import { GlobalStyle, AppContainer, Logo } from "./styles";

const cards = [
  { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

function App() {
  const [answeredCards, setAnsweredCards] = useState(0);

  return (
    <AppContainer>
      <GlobalStyle />
      <header>
      <Logo src={logo} alt="Logo do Zap Recall" />
      <h1>Zap Recall</h1>
      </header>
      <Deck cards={cards} setAnsweredCards={setAnsweredCards} />
      <ProgressBar total={cards.length} answered={answeredCards} />
    </AppContainer>
  );
}

export default App;
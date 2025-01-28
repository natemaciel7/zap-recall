import React, { useState } from "react";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import { FlashcardContainer, Front, Back, Button, Icon } from "../styles";

function Flashcard({ card, setAnsweredCards }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [status, setStatus] = useState("");

  const handleAnswer = (status) => {
    setStatus(status);
    setIsAnswered(true);
    setAnsweredCards((prev) => prev + 1);
  };

  return (
    <FlashcardContainer isFlipped={isFlipped} isAnswered={isAnswered} status={status}>
      <Front onClick={() => setIsFlipped(!isFlipped)}>
        <span>Pergunta {card.id}</span>
        <Icon src={setaPlay} alt="Ícone de play" />
      </Front>
      <Back>
        <p>{card.question}</p>
        <p>{card.answer}</p>
        {!isAnswered && (
          <div>
            <Button onClick={() => handleAnswer("incorrect")}>Não lembrei</Button>
            <Button onClick={() => handleAnswer("partial")}>Quase não lembrei</Button>
            <Button onClick={() => handleAnswer("correct")}>Zap!</Button>
            <Icon src={setaVirar} alt="Ícone de virar" onClick={() => setIsFlipped(!isFlipped)} />
          </div>
        )}
      </Back>
    </FlashcardContainer>
  );
}

export default Flashcard;
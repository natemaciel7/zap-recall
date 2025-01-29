import React, { useState } from "react";
import { ButtonContainer } from "../styles";
import iconPlay from "../assets/seta_play.png";
import iconVirar from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import iconPartial from "../assets/icone_quase.png";
import iconWrong from "../assets/icone_erro.png";
import { FlashcardContainer, Front, Back, Button, Icon, StrikethroughText } from "../styles";

function Flashcard({ card, setAnsweredCards }) {
  const [stage, setStage] = useState("front");
  const [status, setStatus] = useState("");

  const handleAnswer = (status) => {
    setStatus(status);
    setStage("done");
    setAnsweredCards((prev) => prev + 1);
  };

  return (
    <FlashcardContainer stage={stage} status={status}>
      {stage === "front" && (
        <Front onClick={() => setStage("question")}>
          <span>Pergunta {card.id}</span>
          <Icon src={iconPlay} alt="Ícone de play" />
        </Front>
      )}

      {stage === "question" && (
        <Back>
          <p>{card.question}</p>
          <Icon src={iconVirar} alt="Ícone de virar" onClick={() => setStage("answer")} />
        </Back>
      )}

      {stage === "answer" && (
        <Back>
          <p>{card.answer}</p>
          <ButtonContainer>
            <Button status="incorrect" onClick={() => handleAnswer("incorrect")}>
              <Icon src={iconWrong} alt="Não lembrei" />
              Não lembrei
            </Button>
            <Button status="partial" onClick={() => handleAnswer("partial")}>
              <Icon src={iconPartial} alt="Quase não lembrei" />
              Quase lembrei
            </Button>
            <Button status="correct" onClick={() => handleAnswer("correct")}>
              <Icon src={iconCorrect} alt="Zap!" />
              Zap!
            </Button>
          </ButtonContainer>
        </Back>
      )}

      {stage === "done" && (
        <Front>
          <span>Pergunta {card.id}</span>
          <Icon
            src={
              status === "incorrect" ? iconWrong : 
              status === "partial" ? iconPartial : 
              iconCorrect
            }
            alt="Ícone de status"
          />
        </Front>
      )}
    </FlashcardContainer>
  );
}

export default Flashcard;

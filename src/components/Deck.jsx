import React from "react";
import Flashcard from "./Flashcard";
import { DeckContainer } from "../styles";

function Deck({ cards, setAnsweredCards }) {
  return (
    <DeckContainer>
      {cards.map((card) => (
        <Flashcard key={card.id} card={card} setAnsweredCards={setAnsweredCards} />
      ))}
    </DeckContainer>
  );
}

export default Deck;
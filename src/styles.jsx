import styled from "styled-components";

export const GlobalStyle = styled.div`
  body {
    font-family: 'Recursive', sans-serif;
    background-color: #FB6B6B;
    margin: 0;
    padding: 0;
  }
`;

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FlashcardContainer = styled.div`
  width: 300px;
  height: 150px;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 0.6s;
  cursor: pointer;
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFF;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFF;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProgressContainer = styled.div`
  margin-top: 20px;
`;
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Recursive', sans-serif;
    background-color: #FB6B6B;
    margin: 0;
    padding: 0;
    color: #333;
  }

  h1 {  
    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #FFFFFF;
  }
`;

export const Header = styled.header`
display: flex;
align-items: center; 
gap: 10px; 
margin-bottom: 20px; 
flex-direction: row;

`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: #FB6B6B;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;  
  margin-bottom: 20px;
`;

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const FlashcardContainer = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: ${({ stage }) => (stage === "answer" ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 0.6s;
  cursor: ${({ stage }) => (stage === "done" ? "default" : "pointer")};
  margin-bottom: 20px;
  background-color: ${({ status }) =>
    status === "incorrect" ? "#FF3030" :
    status === "partial" ? "#FF922E" :
    status === "correct" ? "#2FBE34" :
    "#FFFFFF"};
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFD4;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: ${({ status }) =>
    status === "incorrect" ? "#FF3030" :
    status === "partial" ? "#FF922E" :
    "#2FBE34"};
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

export const ProgressContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 5px;
`;
export const StrikethroughText = styled.span`
  text-decoration: line-through;
  font-size: 16px;
  color: #333;
`;
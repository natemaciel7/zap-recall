import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;600&family=Righteous&display=swap');

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
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button, p, span, div {
    font-family: 'Recursive', sans-serif; 
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;  
  margin-bottom: 20px;
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
`;

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

export const FlashcardContainer = styled.div`
  width: 270px; 
  background-color: ${({ status }) =>
    status === "incorrect" ? "#FF3030" :
    status === "partial" ? "#FF922E" :
    status === "correct" ? "#2FBE34" :
    "#FFFFFF"};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${({ stage }) => (stage === "done" ? "default" : "pointer")};
`;

export const Front = styled.div`
  width: 100%;
  min-height: 60px; 
  background-color: #FFFFFF; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Back = styled.div`
  width: 100%;
  min-height: 130px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
  font-size: 14px;
  color: #333;
  background-color: #FFFFD4;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-wrap: nowrap; 
  width: 100%;
  gap: 6px; 
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 85px; 
  height: 40px; 
  padding: 5px; 
  border: none;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: ${({ status }) =>
    status === "incorrect" ? "#FF3030" :
    status === "partial" ? "#FF922E" :
    "#2FBE34"};

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
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

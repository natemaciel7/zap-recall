import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;600&family=Righteous&display=swap');

  body {
    font-family: 'Recursive', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    
  }

  h1 {
    font-family: 'Righteous', cursive;  
    font-size: 36px;
    color: #FFFFFF;

    gap: 10px;
  }

  button, p, span, div {
    font-family: 'Recursive', sans-serif; 
  }
`;


export const AppContainer = styled.div`
 width: 100%;
  margin: auto;
  padding: 16px;
  max-width: 400px; 
  background-color: #FB6B6B;

   @media (max-width: 500px) {
    max-width: 100%; 
    padding: 12px;
  }

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
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ stage }) => (stage === "done" ? "default" : "pointer")};

   @media (max-width: 500px) {
    font-size: 16px;
    padding: 12px;
  }

  

   span {
    font-weight: bold;
    text-decoration: ${({ status }) => (status ? "line-through" : "none")};
    color: ${({ status }) =>
      status === "incorrect" ? "#FF3030" :  
      status === "partial" ? "#FF922E" :   
      status === "correct" ? "#2FBE34" : 
      "#333"}; 
  }
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

export const Header = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 10px; 
  padding: 20px;
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
padding: 50px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
  background-color: #FFFFFF;
  color: black;
`;

export const StrikethroughText = styled.span`
  text-decoration: line-through;
  font-size: 16px;
  color: #333;
`;

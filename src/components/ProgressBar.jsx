import React from "react";
import { ProgressContainer } from "../styles";

function ProgressBar({ total, answered }) {
  return (
    <ProgressContainer>
      <span>{answered}/{total} CONCLUÍDOS</span>
    </ProgressContainer>
  );
}

export default ProgressBar;
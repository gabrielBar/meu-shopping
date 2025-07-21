import React, { useState } from "react";
import * as S from "./style";

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const incrementa = () => {
    setCounter(counter + 1);
  };
  const decrementa = () => {
    setCounter(Math.max(0, counter - 1));
  };
  const zeraContador = () => {
    setCounter(0);
  };
  return (
    <S.ContatadorContainer>
      <S.Contador>
        <S.NumeroContador>{counter}</S.NumeroContador>
        <S.ButtonsContainer>
          <S.StyledButton data-role="incrementa" onClick={incrementa}>
            +1
          </S.StyledButton>
          <S.StyledButton data-role="decrementa" onClick={decrementa}>
            -1
          </S.StyledButton>
          <S.StyledButton onClick={zeraContador}>Zerar</S.StyledButton>
        </S.ButtonsContainer>
      </S.Contador>
    </S.ContatadorContainer>
  );
};

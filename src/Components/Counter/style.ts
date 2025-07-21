import styled from "styled-components";

export const ContatadorContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const NumeroContador = styled.h1``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const Contador = styled.div`
  background-color: white;
  box-shadow: 0 0 4px black;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.6rem;
  filter: drop-shadow(0 0 2px gray);

  &:hover {
    filter: drop-shadow(0 0 2px gray) brightness(1.2);
  }

  &[data-role="incrementa"] {
    background-color: lightgreen;
  }

  &[data-role="decrementa"] {
    background-color: lightcoral;
  }
`;

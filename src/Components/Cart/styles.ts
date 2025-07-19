import exp from "constants";
import { styled } from "styled-components";

interface IContainerCartProps {
  showCart: boolean;
}
export const Container = styled.aside<IContainerCartProps>`
  position: fixed;
  top: 0;
  /* right: -350px; */
  right: ${(props) => (props.showCart ? "0px" : "-350px")};

  transition: right 0.4s;
  width: 350px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;

export const titleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
  }
`;
export const Title = styled.h1``;

export const ProdutoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  h1 {
    font-size: 1rem;
  }
`;

export const ListaProdutos = styled.ul`
  list-style: none;
`;

export const ListaProdutosItem = styled.li``;

export const imagemContainer = styled.div`
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export const Totalizador = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  color: red;
  border: none;
`;

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

export const Title = styled.h1``;

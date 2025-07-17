import { styled } from "styled-components";

export const Header = styled.header`
  background-color: navy;
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

interface AuthButtonProps {
  isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 2px;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  color: white;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 2px;

  background-color: violet;
  color: black;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

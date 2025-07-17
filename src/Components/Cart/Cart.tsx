import * as S from "./styles";

interface ICartProps {
  showCart: boolean;
}

export const Cart: React.FC<ICartProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
    </S.Container>
  );
};

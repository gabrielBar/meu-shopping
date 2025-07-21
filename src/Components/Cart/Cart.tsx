import { IProduto } from "../../Data/Products";
import { FiTrash } from "react-icons/fi";
import * as S from "./styles";
import { useDispatch } from "react-redux";

import { removeProduto } from "../../Redux/CartReducer/cart-slice";

interface ICartProps {
  showCart: boolean;
  produtos: IProduto[] | null;
  onToggle: () => void;
}

const TrashIcon = FiTrash as unknown as React.FC;
export const Cart: React.FC<ICartProps> = ({
  showCart,
  produtos,
  onToggle,
}) => {
  const dispatch = useDispatch();

  return (
    <S.Container $showCart={showCart}>
      <S.titleContainer>
        <S.Title>Carrinho</S.Title>
        <button onClick={() => onToggle()}>X</button>
      </S.titleContainer>

      <S.ListaProdutos>
        {produtos?.map((produto) => (
          <S.ListaProdutosItem key={produto.id}>
            <S.ProdutoContainer>
              <S.imagemContainer>
                <img src={produto.image} alt={produto.description}></img>
              </S.imagemContainer>
              <div className="produto-info">
                <h1 className="produto-name">
                  {produto.title} $ {produto.price}
                </h1>
              </div>
              <div>
                <S.DeleteButton
                  data-testid={`btn-remove-${produto.id}`}
                  data-role="btn-delete"
                  title="Deleta esse item"
                  onClick={() => dispatch(removeProduto(produto))}
                >
                  <TrashIcon />
                </S.DeleteButton>
              </div>
            </S.ProdutoContainer>
          </S.ListaProdutosItem>
        ))}
      </S.ListaProdutos>
      <S.Totalizador>
        <div>Total: </div>
        <strong data-testid="totalizador">
          ${" "}
          {produtos
            ?.reduce((acc, produto) => acc + produto.price, 0)
            .toFixed(2)}
        </strong>
      </S.Totalizador>
    </S.Container>
  );
};

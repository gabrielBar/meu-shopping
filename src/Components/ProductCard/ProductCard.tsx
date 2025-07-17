import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { IProduto } from "../../Data/Products";

const ShoppingCartIcon = FiShoppingCart as unknown as React.FC;
interface IProductCardProps {
  product: IProduto;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.ProductImage
        src={product.image}
        alt={product.description}
      ></S.ProductImage>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceWrapper>
        <S.Review>{product.rating.rate}</S.Review>
        <S.Price>$ {product.price}</S.Price>
      </S.ReviewPriceWrapper>
      <S.ButtonsWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho
          <ShoppingCartIcon></ShoppingCartIcon>
        </S.AddToCartButton>
      </S.ButtonsWrapper>
    </S.Card>
  );
};

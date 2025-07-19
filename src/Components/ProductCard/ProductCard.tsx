import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { IProduto } from "../../Data/Products";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootReducer } from "../../Redux/root-reduce";
import { addProduto, removeProduto } from "../../Redux/CartReducer/cart-slice";

const ShoppingCartIcon = FiShoppingCart as unknown as React.FC;
interface IProductCardProps {
  product: IProduto;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch(addProduto(product));
  }

  function handleRemoveProductToCart() {
    dispatch(removeProduto(product));
  }

  const isInCart = cart.some((item) => item.id === product.id);
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
        {isInCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductToCart}>
            Remove ao Carrinho
            <ShoppingCartIcon></ShoppingCartIcon>
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <ShoppingCartIcon></ShoppingCartIcon>
          </S.AddToCartButton>
        )}
      </S.ButtonsWrapper>
    </S.Card>
  );
};

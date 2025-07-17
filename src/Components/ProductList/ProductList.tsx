import { ProductCard } from "../ProductCard/ProductCard";
import { produtos } from "../../Data/Products";

import * as S from "./styles";
export const ProductList: React.FC = () => {
  return (
    <S.Container>
      {produtos.map((produto) => {
        return <ProductCard key={produto.id} product={produto}></ProductCard>;
      })}
      {/* <ProductCard></ProductCard> */}
    </S.Container>
  );
};

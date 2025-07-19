import React, { useState } from "react";
import * as S from "./style";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { rootReducer, RootReducer } from "../../Redux/root-reduce";
import { IUser } from "../../Redux/UserReducer/userReducer";

const LogInIcon = FiLogIn as unknown as React.FC;
const LogOutIcon = FiLogOut as unknown as React.FC;
const ShoppingCartIcon = FiShoppingCart as unknown as React.FC;

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReduce: RootReducer) => rootReduce.userReducer
  );

  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const [showCart, SetShowCart] = useState(false);
  const isLogged = user != null;

  const dispatch = useDispatch();

  function handleUserAuth() {
    const usuarioEstaLogado = user !== null;
    if (!usuarioEstaLogado) {
      //dispatch action de login
      const usuario: IUser = { name: "gabriel", email: "gabriel@email.com" };
      dispatch({ type: "user/login", payload: usuario });
    } else {
      dispatch({ type: "user/logoff" });
    }
  }

  return (
    <S.Header>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <div
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            {user ? `Olá, ${user.name}` : ""}
          </div>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? (
              <span>
                Logout <LogOutIcon />
              </span>
            ) : (
              <span>
                Login
                <LogInIcon />
              </span>
            )}
          </S.AuthButton>
          <S.CartButton
            onClick={() => {
              SetShowCart(!showCart);
            }}
          >
            carrinho <ShoppingCartIcon />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart
        showCart={showCart}
        produtos={cart}
        onToggle={() => {
          SetShowCart(!showCart);
        }}
      ></Cart>
    </S.Header>
  );
};

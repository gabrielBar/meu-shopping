import { stat } from "fs";
import { IProduto } from "../../Data/Products";

export interface ICartState {
  cart: IProduto[];
}

interface ICartAction {
  type: string;
  payload: IProduto;
}

const initialState: ICartState = {
  cart: [],
};

export function cartReducer(
  state = initialState,
  action: ICartAction
): ICartState {
  switch (action.type) {
    case "cart/add-produto":
      return { ...state, cart: [...state.cart, action.payload] };

    case "cart/remove-produto":
      let novoCart = state.cart.filter(
        (produto) => produto.id !== action.payload.id
      );

      return { ...state, cart: novoCart };

    default:
      return state;
  }
}

import { IProduto } from "../../Data/Products";

export interface ICartState {
  Cart: IProduto[] | null;
}

interface ICartAction {
  type: string;
  payload: IProduto;
}

const initialState: ICartState = {
  Cart: [],
};

export function cartReducer(
  state = initialState,
  action: ICartAction
): ICartState {
  return state;
}

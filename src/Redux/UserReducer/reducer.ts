import { resolveObjectURL } from "buffer";
import { act } from "react";

export interface IUser {
  name: string;
  email: string;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

//guarda o estado que desejamos compartilhar
//e manipula os estados
interface IUserAction {
  type: string;
  payload?: IUser;
}

//todo reduce precisa retorna o estado atualizado
// ou seja, apos a aplicaão da action
export function userReducer(
  state: IUserState = initialState,
  action: IUserAction
): IUserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as IUser,
    };
  } else if (action.type === "user/logoff") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}

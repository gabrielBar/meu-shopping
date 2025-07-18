import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/userReducer";
import { cartReducer, ICartState } from "./CartReducer/cartReducer";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

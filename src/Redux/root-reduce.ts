import { combineReducers } from "redux";
// import { userReducer } from "./UserReducer/userReducer";
// import { cartReducer, ICartState } from "./CartReducer/cartReducer";
import { userSlice } from "./UserReducer/user-slice";
import { cartSlice } from "./CartReducer/cart-slice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
  // cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

// import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reduce";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// export const store = createStore(
//   rootReducer,
//   undefined,
//   applyMiddleware(logger)
// );
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

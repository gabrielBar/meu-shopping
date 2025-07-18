import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reduce";
import logger from "redux-logger";
export const store = createStore(rootReducer, applyMiddleware(logger));

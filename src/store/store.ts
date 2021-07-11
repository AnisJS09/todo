import { Action, applyMiddleware, createStore, Store } from "redux";
import appReducer from "./store.reducer";
import { AppState } from "./store.types";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export type DispatchType = (args: Action<any>) => Action<any>;

export const store: Store<AppState, Action<any>> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

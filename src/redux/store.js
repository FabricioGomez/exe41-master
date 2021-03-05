import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();
const middlewates = [sagaMiddleware, composeWithDevTools];
const store = createStore(rootReducer, applyMiddleware(...middlewates));
export  {store,sagaMiddleware}

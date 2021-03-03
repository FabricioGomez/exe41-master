import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {sagaMiddleware, store} from "./redux/store";
import rootSaga from "./saga/sagas";

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

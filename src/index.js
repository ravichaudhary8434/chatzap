import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { Saga } from "./sagas";
import { Provider } from "react-redux";
import "./assets/styles/main.scss";
import "react-toastify/dist/ReactToastify.css";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(Saga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

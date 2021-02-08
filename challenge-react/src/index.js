import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Segoe UI, Arial, sans-serif;
  }
  button {
    font-family: Segoe UI, Arial, sans-serif;
  }
  p {
    margin: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const store = createStore(function (state, action) {
  const _state =
    state == null
      ? {
          donate: 0,
          message: "",
        }
      : state;

  switch (action.type) {
    case "UPDATE_TOTAL_DONATE":
      const donateAdd = action.amount ? action.amount : 0;
      return Object.assign({}, _state, {
        donate: _state.donate + donateAdd,
      });
    case "UPDATE_MESSAGE":
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
});

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

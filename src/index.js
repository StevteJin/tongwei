import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import { makeStore } from "./redux/store";

import Main from "./main";
import "./index.css";
const store = makeStore();
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Main />
  </StoreContext.Provider>,
  document.getElementById("root")
);

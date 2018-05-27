import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import HomePage from "./components/HomePage";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

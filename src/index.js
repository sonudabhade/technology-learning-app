import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const history = createBrowserHistory({forceRefresh: true});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
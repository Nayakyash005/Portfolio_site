import ReactDOM from "react-dom";
import "./index.css";

// index.js or main.js

import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

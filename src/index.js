import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
  rootElement
);

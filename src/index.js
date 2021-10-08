import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AddUser from "./AddUsers.js";
import Navbar from "./NavigationBar.js";
import ShowUsers from "./Users.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navbar />
    <AddUser />
  </StrictMode>,
  rootElement
);

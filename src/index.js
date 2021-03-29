import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { MyForm } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MyForm />
  </StrictMode>,
  rootElement
);

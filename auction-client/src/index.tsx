import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter basename="/auction-int20h/auction-client">
    <App />
  </BrowserRouter>,
);

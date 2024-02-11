import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { store } from "./app/store";
import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);

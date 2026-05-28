import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/App.css";
import "./styles/Common.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

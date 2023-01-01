import React from "react";
import { CurrentStepContextProvider } from "./contexts/CurrentStepContext";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentStepContextProvider>
      <App />
    </CurrentStepContextProvider>
  </React.StrictMode>
);

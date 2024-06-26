// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// Імпорт стилів нормалізації
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { App } from "./components/App/App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

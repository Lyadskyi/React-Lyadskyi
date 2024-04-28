// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { userContext } from "./userContext";

// Імпорт стилів нормалізації
import "modern-normalize";
import App from "./components/App/App.jsx";
import "./index.css";

const contextValue = {
  username: "Mango",
  isLoggedIn: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <userContext.Provider value={contextValue}>
      <App />
    </userContext.Provider>
  </React.StrictMode>
);

// import { createContext } from "react";
// import ReactDOM from "react-dom/client";

// const myContext = createContext();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <myContext.Provider value={{ username: "Mango" }}>
//     <App />
//   </myContext.Provider>
// );

// import { UserProvider } from "./userContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UserProvider>
//     <App />
//   </UserProvider>
// );

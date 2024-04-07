// src/components/App.jsx
// import { useState, useEffect } from "react";

// Import Components
import LoginForm from "../LoginForm/LoginForm";

// Import Styles
import css from "./App.module.css";

const App = () => {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <hr /> <hr />
      <h2>Forms</h2>
      <button className={css.btn} onClick={handleClick}>
        Test form!
      </button>
      <LoginForm />
      <hr /> <hr />
    </>
  );
};

export default App;

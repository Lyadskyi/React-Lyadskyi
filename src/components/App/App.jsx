// src/components/App.jsx
// import { useState, useEffect } from "react";

// Import Components
import LoginForm from "../LoginForm/LoginForm";
import LoginFormOne from "../LoginFormOne/LoginFormOne";

// Import Styles
import css from "./App.module.css";

const App = () => {
  const handleClick = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <>
      <hr /> <hr />
      <h2>Forms</h2>
      <form className={css.form} onClick={handleClick}>
        <input className={css.input} type="text" name="login" />
        <input className={css.input} type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
      <hr />
      <LoginForm />
      <hr /> <hr />
      <h2>Uncontrolled form</h2>
      <LoginFormOne />
      <hr /> <hr />
      <h2>Using the form</h2>
      <hr /> <hr />
    </>
  );
};

export default App;

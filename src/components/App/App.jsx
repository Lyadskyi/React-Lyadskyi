// src/components/App.jsx
import { useState } from "react";

// Import Components
import LoginForm from "../LoginForm/LoginForm";
import LoginFormOne from "../LoginFormOne/LoginFormOne";
import LoginFormTwo from "../LoginFormTwo/LoginFormTwo";
import MyComponent from "../MyComponent/MyComponent";
import LoginFormThree from "../LoginFormThree/LoginFormThree";
import SearchBar from "../SearchBar/SearchBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

// Import Styles
import css from "./App.module.css";

const App = () => {
  // * Uncontrolled form/Неконтрольована форма * //
  const handleClick = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  // * Using the form/Використання форми * //
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  // * The select element/Елемент select * //
  const [lang, setLang] = useState("uk");

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
      <h3 className={css.title}>Please login to your account!</h3>
      {/* Передаємо колбек, як пропс форми */}
      <LoginFormTwo onLogin={handleLogin} />
      <hr /> <hr />
      <h2>The useId hook</h2>
      <MyComponent />
      <hr />
      <LoginFormThree />
      <hr /> <hr />
      <h2>Controlled elements</h2>
      <SearchBar />
      <hr /> <hr />
      <h2>The select element</h2>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <hr /> <hr />
    </>
  );
};

export default App;

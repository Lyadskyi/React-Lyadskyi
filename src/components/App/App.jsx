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
import LoginFormFour from "../LoginFormFour/LoginFormFour";

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

  // * Radio buttons/Радіо-кнопки * //
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  // * Checkboxes/Чекбокси * //
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <>
      <hr /> <hr />
      <h2 className={css.moduleHead}>Lesson 1. Forms</h2>
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
      <h3 className={css.usingTitle}>Please login to your account!</h3>
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
      <p className={css.select}>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <hr /> <hr />
      <h2>Radio buttons</h2>
      <h3 className={css.radioBtnTitle}>Select coffee size</h3>
      <div className={css.radioContainer}>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
            onChange={handleSizeChange}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </div>
      <hr /> <hr />
      <h2>Checkboxes</h2>
      <div className={css.checkbox}>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={hasAccepted}>
          Proceed
        </button>
      </div>
      <hr /> <hr />
      <h2>Controlled form</h2>
      <LoginFormFour />
      <hr /> <hr />
      <h2 className={css.moduleHead}>Lesson 2. Formik library</h2>
      <hr /> <hr />
    </>
  );
};

export default App;

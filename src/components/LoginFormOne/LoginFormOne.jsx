// src/components/LoginFormOne.jsx

import css from "./LoginFormOne.module.css";

const LoginFormOne = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Посилання на DOM-елементи
    // console.log(login, password);

    // Значення полів
    console.log(login.value, password.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form className={css.unForm} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="login" />
      <input className={css.input} type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginFormOne;

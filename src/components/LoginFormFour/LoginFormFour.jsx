// src/components/LoginFormFour.jsx

import { useState } from "react";
import css from "./LoginFormFour.module.css";

const LoginFormFour = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  // const handleLoginChange = (evt) => {
  //   setValues({
  //     ...values,
  //     login: evt.target.value,
  //   });
  // };

  // const handlePwdChange = (evt) => {
  //   setValues({
  //     ...values,
  //     password: evt.target.value,
  //   });
  // };

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Значення полів
    console.log(values);

    // Очищаємо форму
    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form className={css.controlForm} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        className={css.input}
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginFormFour;

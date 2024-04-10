// src/components/LoginFormThree.jsx

import { useId } from "react";
import css from "./LoginFormThree.module.css";

const LoginFormThree = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form className={css.form}>
      <label className={css.label} htmlFor={loginId}>
        Login
      </label>
      <input className={css.input} type="text" name="login" id={loginId} />

      <label className={css.label} htmlFor={passwordId}>
        Password
      </label>
      <input
        className={css.input}
        type="password"
        name="password"
        id={passwordId}
      />

      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginFormThree;

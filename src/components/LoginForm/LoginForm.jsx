// src/components/LoginForm.jsx
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <form className={css.login} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="login" />
      <input className={css.input} type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};
export default LoginForm;

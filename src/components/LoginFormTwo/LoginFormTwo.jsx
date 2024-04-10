// src/components/LoginFormTwo.jsx

import css from "./LoginFormTwo.module.css";

const LoginFormTwo = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form className={css.usForm} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="login" />
      <input className={css.input} type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginFormTwo;

// Зверніть увагу на те, що в пропс onLogin ми передаємо дані полів форми, а не об'єкт події. Об'єкт події використовується лише всередині форми для скасування типової поведінки і роботи з її елементами. Передавати об'єкт події в пропс - це антипаттерн.

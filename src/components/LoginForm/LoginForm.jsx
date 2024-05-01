import { useState } from "react";
import css from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        className={css.input}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={css.input}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

// src/components/Button.jsx

import clsx from "clsx";

const Button = ({ variant, children }) => {
  // Базові стилі кнопки з кількома варіантами відображення
  return <button className={clsx("button", variant)}>{children}</button>;
};
export default Button;

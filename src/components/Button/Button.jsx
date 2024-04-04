// src/components/Button.jsx

import clsx from "clsx";

const Button = ({ variant, type = "button", children }) => {
  return (
    <button className={clsx("button", variant, "type", type)}>
      {children}
    </button>
  );
};
export default Button;

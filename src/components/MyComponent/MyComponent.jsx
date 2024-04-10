// src/components/MyComponent.jsx

import { useId } from "react";
import css from "./MyComponent.module.css";

const MyComponent = () => {
  const id = useId();
  return (
    <div className={css.id}>
      <label className={css.label} htmlFor={id}>
        Text field label
      </label>
      <input className={css.input} type="text" id={id} />
    </div>
  );
};

export default MyComponent;

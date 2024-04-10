// src/components/LangSwitcher.jsx

import { useId } from "react";
import css from "./LangSwitcher.module.css";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div className={css.select}>
      <label className={css.label} htmlFor={selectId}>
        Choose language
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;

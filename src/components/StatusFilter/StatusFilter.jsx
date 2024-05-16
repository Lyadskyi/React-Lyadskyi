// src/components/StatusFilter/StatusFilter.jsx

// Імпортуємо хук
import { useSelector } from "react-redux";

// Імпортуємо об'єкт значень фільтра
import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector((state) => state.filters.status);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

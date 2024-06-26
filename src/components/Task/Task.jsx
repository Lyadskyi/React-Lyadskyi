// src/components/Task/Task.jsx

// Імпортуємо хук
import { useDispatch } from "react-redux";

// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from "../../redux/actions";

import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену
  // Відправляємо результат - екшен видалення завдання та передаємо ідентифікатор завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // Відправляємо результат - екшен перемикання статусу завдання та передаємо ідентифікатор завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

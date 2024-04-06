// src/components/ClickCounterConditionIsolation.jsx

const ClickCounterCondIsol = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounterCondIsol;

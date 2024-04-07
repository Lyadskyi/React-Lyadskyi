// src/components/ClickCounterConditionIsolation.jsx

const ClickCounterCondIsol = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounterCondIsol;

// const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

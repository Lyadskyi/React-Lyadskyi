// src/components/App.jsx
import { useState } from "react";

// Import Components
import CustomButton from "../CustomButton/CustomButton";
import ClickCounter from "../ClickCounter/ClickCounter";
import ClickCounterCondIsol from "../ClickCounterCondIsol/ClickCounterCondIsol";

// Import assets

// Import files.json

import css from "../App/App.module.css";

const App = () => {
  let clicks = 0;
  const [clicksOne, setClicksOne] = useState(0);
  const [clicksTwo, setClicksTwo] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [clicksThree, setClicksThree] = useState(0);
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const updateX = () => {
    setValues({ ...values, x: values.x + 1 });
  };

  const updateY = () => {
    setValues({ ...values, y: values.y + 1 });
  };

  const handleClick = () => {
    alert("I'm a button!");
  };
  const handleClickOne = (evt) => {
    console.log(evt);
  };
  const handleClickTwo = () => {
    clicks = clicks + 1;
  };
  const handleClickThree = () => {
    setClicksOne(clicksOne + 1);
  };
  const handleClickFour = () => {
    setClicksTwo(clicksTwo + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClickFive = () => {
    setClicksThree(clicksThree + 1);
  };

  return (
    <>
      <hr /> <hr />
      <button className={css.btn} onClick={handleClick}>
        Click me!
      </button>
      <hr /> <hr />
      <button onClick={handleClickOne}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
      <hr /> <hr />
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <hr /> <hr />
      <button onClick={handleClickTwo}>Current: {clicks}</button>
      <hr /> <hr />
      <button onClick={handleClickThree}>Current: {clicksOne}</button>
      <hr /> <hr />
      <button onClick={handleClickFour}>Current: {clicksTwo}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <hr /> <hr />
      <ClickCounter />
      <ClickCounter />
      <ClickCounter />
      <hr /> <hr />
      <ClickCounterCondIsol value={clicksThree} onUpdate={handleClickFive} />
      <ClickCounterCondIsol value={clicksThree} onUpdate={handleClickFive} />
      <hr /> <hr />
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
      <hr /> <hr />
    </>
  );
};
export default App;

// const App = () => {
//   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };

// export default App;

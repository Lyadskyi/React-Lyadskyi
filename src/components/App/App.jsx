// src/components/App.jsx
import { useState } from "react";

// Import Components
import CustomButton from "../CustomButton/CustomButton";

// Import assets

// Import files.json

import css from "../App/App.module.css";

const App = () => {
  let clicks = 0;
  const [clicksOne, setClicksOne] = useState(0);
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
    </>
  );
};
export default App;

// const App = () => {
//   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };

// export default App;

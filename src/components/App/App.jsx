// src/components/App.jsx
import { useState, useEffect } from "react";

// Import Components
import CustomButton from "../CustomButton/CustomButton";
import ClickCounter from "../ClickCounter/ClickCounter";
import ClickCounterCondIsol from "../ClickCounterCondIsol/ClickCounterCondIsol";
import Modal from "../Modal/Modal";

import css from "../App/App.module.css";

const App = () => {
  let clicks = 0;
  // Event processing/Обробка подій
  // Також можна визначити обробник подій безпосередньо всередині JSX як анонімну інлайн-функцію.
  // const App = () => {
  //   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
  // };

  // Event object/Об'єкт події
  const [clicksOne, setClicksOne] = useState(0);

  // The state of the component/Стан компонента
  const [clicksTwo, setClicksTwo] = useState(0);

  // Reactivity/Реактивність
  const [clicksThree, setClicksThree] = useState(0);

  // Several states/Декілька станів
  const [isOpen, setIsOpen] = useState(false);

  // Update objects/Оновлення об'єктів
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
  // The useEffect hook/Хук useEffect
  const [clicksFour, setClicksFour] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${clicksFour} times`;
  });
  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  // Mounting stage/Етап монтування
  const [clicksFive, setClicksFive] = useState(0);

  // Disassembly stage/Етап розмонтування
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);

  // Disassembly stage/Етап розмонтування
  const [isOpenOne, setIsOpenOne] = useState(false);

  // useEffect(() => {
  //   console.log("Effect");
  //   return () => {
  //     console.log("Clean up");
  //   };
  // });

  // Update stage/Етап оновлення
  const [clicksSix, setClicksSix] = useState(0);
  useEffect(() => {
    console.log("Clicks updated: ", clicksSix);
  }, [clicksSix]);

  // Several effects/Декілька ефектів
  const [clicksSeven, setClicksSeven] = useState(0);
  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    console.log("Clicks updated: ", clicksSeven);
  }, [clicksSeven]);

  useEffect(() => {
    document.title = `You clicked ${clicksSeven} times`;
  });

  // Коли в компоненті є кілька станів, можна використовувати ефекти, щоб реагувати на зміни будь-якої комбінації значень і виконувати певний код.
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  // Working with LocalStorage/Робота з LocalStorage
  const [clicksEight, setClicksEight] = useState(0);
  useEffect(() => {
    console.log(`Clicks changed - ${clicksEight}`);
  }, [clicksEight]);

  const [clicksNine, setClicksNine] = useState(0);
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicksNine);
  }, [clicksNine]);

  // Якщо ви працюєте із складними типами даних, такими як об'єкт чи масив, не забувайте перетворити збережене значення у рядок за допомогою JSON.stringify.
  // window.localStorage.setItem("key", JSON.stringify({}));

  const [clicksTen, setClicksTen] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = window.localStorage.getItem("saved-clicks");

    // Якщо там щось є, повертаємо це
    // значення, як початкове значення стану
    if (savedClicks !== null) {
      return savedClicks;
    }

    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return 0;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicksTen);
  }, [clicksTen]);

  // === ФУНКЦІЇ ВИКЛИКУ ПОДІЙ === //

  // Event processing/Обробка подій
  const handleClick = () => {
    alert("I'm a button!");
  };

  // Event object/Об'єкт події
  const handleClickOne = (evt) => {
    console.log(evt);
  };

  // The state of the component/Стан компонента
  const handleClickTwo = () => {
    clicks = clicks + 1;
  };

  // Reactivity/Реактивність
  const handleClickThree = () => {
    setClicksOne(clicksOne + 1);
  };

  // Several states/Декілька станів
  const handleClickFour = () => {
    setClicksTwo(clicksTwo + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //Elevation of state/Підняття стану
  const handleClickFive = () => {
    setClicksThree(clicksThree + 1);
  };

  return (
    <>
      <hr /> <hr />
      <h2>Event processing</h2>
      <button className={css.btn} onClick={handleClick}>
        Click me!
      </button>
      <hr /> <hr />
      <h2>Event object</h2>
      <button onClick={handleClickOne}>First button</button>
      <button onClick={(evt) => console.log(evt)}>Second button</button>
      <hr /> <hr />
      <h2>Reading props</h2>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <hr /> <hr />
      <h2>The state of the component</h2>
      <button onClick={handleClickTwo}>Current: {clicks}</button>
      <hr /> <hr />
      <h2>Reactivity</h2>
      <button onClick={handleClickThree}>Current: {clicksOne}</button>
      <hr /> <hr />
      <h2>Several states</h2>
      <button onClick={handleClickFour}>Current: {clicksTwo}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <hr /> <hr />
      <h2>Condition isolation</h2>
      <ClickCounter />
      <ClickCounter />
      <ClickCounter />
      <hr /> <hr />
      <h2>Elevation of state</h2>
      <ClickCounterCondIsol value={clicksThree} onUpdate={handleClickFive} />
      <ClickCounterCondIsol value={clicksThree} onUpdate={handleClickFive} />
      <hr /> <hr />
      <h2>Update objects</h2>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
      <hr /> <hr />
      <h2>The useEffect hook</h2>
      <button onClick={() => setClicksFour(clicksFour + 1)}>
        You clicked {clicksFour} times
      </button>
      <hr /> <hr />
      <h2>Mounting stage</h2>
      <button onClick={() => setClicksFive(clicksFive + 1)}>
        You clicked {clicksFive} times
      </button>
      <hr /> <hr />
      <h2>Disassembly stage</h2>
      <div>App</div>
      <hr /> <hr />
      <h2>Effect with trigger interval when mounting</h2>
      <button onClick={() => setIsOpenOne(!isOpenOne)}>
        {isOpenOne ? "Close" : "Open"}
      </button>
      {isOpenOne && <Modal />}
      <hr /> <hr />
      <h2>Update stage</h2>
      <button onClick={() => setClicksSix(clicksSix + 1)}>
        You clicked {clicksSix} times
      </button>
      <hr /> <hr />
      <h2>Several effects</h2>
      <button onClick={() => setClicksSeven(clicksSeven + 1)}>
        You clicked {clicksSeven} times
      </button>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      <hr /> <hr />
      <h2>Working with LocalStorage</h2>
      <div className={css.localStorage}>
        <button onClick={() => setClicksEight(clicksEight + 1)}>
          You clicked {clicksEight} times
        </button>
        <button onClick={() => setClicksEight(0)}>Reset</button>
        <button onClick={() => setClicksNine(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicksNine(0)}>Reset</button>
        <button onClick={() => setClicksTen(clicksTen + 1)}>
          You clicked {clicksTen} times
        </button>
        <button onClick={() => setClicksTen(0)}>Reset</button>
      </div>
      <hr /> <hr />
    </>
  );
};
export default App;

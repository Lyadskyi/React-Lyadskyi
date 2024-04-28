// src/components/App.jsx;

// ===== HTTP-запити ===== //
// ===== Обробка даних запиту ===== //
// ===== Індикатор завантаження ===== //
// ===== Обробка помилок ===== //
// ===== Поділ відповідальності ===== //
// ===== Пошук через форму ===== //

import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { UserMenu } from "../UserMenu/UserMenu";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ArticleList from "../ArticleList/ArticleList";
import Player from "../Player/Player";
import CustomButton from "../CustomButton/CustomButton";
import ComponentA from "../ComponentA/ComponentA";
import ComponentB from "../ComponentB/ComponentB";
// 1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "../../articles-api";
import css from "./App.module.css";

const App = () => {
  // 2. Оголошуємо стани
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // * Хук useMemo * //
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);
  // * Хук useRef * //
  const [value, setValue] = useState(0);
  // * Відсутність реактивності * //
  const valueRef = useRef(0);

  useEffect(() => {
    // 3. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      // === Тут будемо виконувати HTTP-запит === //
      try {
        // 4. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        // 5. Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic("react");
        // 6. Записуємо дані в стан
        setArticles(data);
      } catch (error) {
        // Тут будемо обробляти помилку
        // Встановлюємо стан error в true
        setError(true);
      } finally {
        // 7. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    // 8. Викликаємо асинхронну функцію одразу після оголошення
    fetchArticles();
  }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // const memoizedValue = useMemo(() => {
  //   return a + b;
  // }, [a, b]);

  // const filteredPlanets = planets.filter((planet) => planet.includes(query));
  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );
  console.log(setPlanets);
  console.log(setQuery);

  // ===== Хук useRef ===== //
  const btnRef = useRef();
  // Буде undefined на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log("App: ", btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("useEffect: ", btnRef.current);
  });

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("handleClick: ", btnRef.current);
  };

  // ===== Відсутність реактивності ===== //
  useEffect(() => {
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log(valueRef.current);
  });

  const handleClickOne = () => {
    valueRef.current += 1;
  };

  // ===== Перенаправлення рефів ===== //
  const btnRefOne = useRef();

  useEffect(() => btnRefOne.current.focus(), []);

  return (
    <>
      <hr /> <hr />
      <h2 className={css.titleLesson}>Lesson 1. HTTP requests</h2>
      <hr /> <hr />
      <h2 className={css.title}>Search through the form</h2>
      <SearchForm onSearch={handleSearch} />
      <hr /> <hr />
      <h2 className={css.title}>Latest articles</h2>
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
      <hr /> <hr />
      <h2 className={css.titleLesson}>Lesson 2. The useMemo hook</h2>
      <hr /> <hr />
      <button className={css.filterBtn} onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
      <hr /> <hr />
      <h2 className={css.title}>The useRef hook</h2>
      <div className={css.containerRef}>
        <button onClick={() => setValue(value + 1)}>
          Update value to trigger re-render
        </button>
        <button ref={btnRef} onClick={handleClick}>
          Button with ref
        </button>
      </div>
      <button onClick={handleClickOne}>Click to update ref value</button>
      <hr /> <hr />
      <h2 className={css.title}>Video player</h2>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <hr /> <hr />
      <CustomButton ref={btnRefOne}>Button with forwarded ref</CustomButton>
      <hr /> <hr />
      <h2 className={css.title}>Own hooks</h2>
      <ComponentA />
      <ComponentB />
      <hr /> <hr />
      <h2 className={css.title}>Context</h2>
      <UserMenu />
      <hr /> <hr />
    </>
  );
};

export default App;

// ===== ❌ Так робити не можна! ===== //

// useEffect(async () => {}, []);

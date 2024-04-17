// src/components/App.jsx;

// ===== HTTP-запити ===== //
// ===== Обробка даних запиту ===== //
// ===== Індикатор завантаження ===== //
// ===== Обробка помилок ===== //
// ===== Поділ відповідальності ===== //
// ===== Пошук через форму ===== //

import { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ArticleList from "../ArticleList/ArticleList";
// 1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "../../articles-api";
import css from "./App.module.css";

const App = () => {
  // 2. Оголошуємо стани
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return (
    <>
      <hr /> <hr />
      <h2 className={css.title}>Search through the form</h2>
      <SearchForm onSearch={handleSearch} />
      <hr /> <hr />
      <h2 className={css.title}>Latest articles</h2>
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
      <hr /> <hr />
    </>
  );
};

export default App;

// ===== ❌ Так робити не можна! ===== //

// useEffect(async () => {}, []);

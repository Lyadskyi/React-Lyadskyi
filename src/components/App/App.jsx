// src/components/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

// Import Components
import ArticleList from "../ArticleList/ArticleList ";

// Import Styles
// import css from "./App.module.css";

const App = () => {
  // useEffect(() => {
  //   // Тут будемо виконувати HTTP-запит
  // }, []);

  // ❌ Так робити не можна!
  // useEffect(async () => {}, []);

  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //   /* Код ефекту */

  useEffect(() => {
    // Оголошуємо асинхронну функцію
    async function fetchArticles() {
      try {
        // Встановлюємо індикатор в true перед запитом
        setLoading(true);
        // Тут будемо виконувати HTTP-запит
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        console.log(response);
        // Записуємо дані в стан
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
      } finally {
        // Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    // Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <div>
      <hr /> <hr />
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <hr /> <hr />
    </div>
  );
};
export default App;

// ========================== //
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { ArticleList } from "./ArticleList";

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* Код ефекту */

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get(
//           "<https://hn.algolia.com/api/v1/search?query=react>"
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

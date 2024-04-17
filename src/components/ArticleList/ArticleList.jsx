// src/components/ArticleList.jsx;

import css from "./ArticleList.module.css";

const ArticleList = ({ items }) => (
  <ul className={css.list}>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;

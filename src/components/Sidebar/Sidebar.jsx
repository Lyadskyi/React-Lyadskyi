// import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Меню</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/about">Про нас</a>
          </li>
          <li>
            <a href="/contact">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className="settings">
        <a href="/settings">Налаштування</a>
      </div>
    </aside>
  );
};

export default Sidebar;

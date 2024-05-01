// src/components/App.jsx;

import { Routes, Route, NavLink } from "react-router-dom";

import clsx from "clsx";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import NotFound from "../../pages/NotFound";
import { Mission } from "../Mission/Mission";
import { Team } from "../Team/Team";
import { Reviews } from "../Reviews/Reviews";

import css from "./App.module.css";
import LoginForm from "../LoginForm/LoginForm";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div className={css.container}>
      <hr /> <hr />
      <h2 className={css.titleLesson}>Lesson 1. Routing</h2>
      <hr /> <hr />
      <h2 className={css.title}>
        BrowserRouter, Route and Routes, Link and NavLink components
      </h2>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          GoMerch Store
        </p>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* ✅ Правильно */}
      {/* <Route path="/about" element={<About />}>
        <Route path="mission" element={<Mission />} />
        <Route path="team" element={<Team />} />
        <Route path="reviews" element={<Reviews />} />
      </Route> */}
      <hr /> <hr />
      <h2 className={css.titleLesson}>Lesson 2. Software navigation</h2>
      <hr /> <hr />
      <LoginForm />
      <hr /> <hr />
    </div>
  );
};

export default App;

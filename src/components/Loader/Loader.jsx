// src/components/Loader.jsx;

import { BiLoaderCircle } from "react-icons/bi";
import css from "./Loader.module.css";

const Loader = () => {
  <>
    <div className={css.load}>
      <BiLoaderCircle />
      <p style={{ fontSize: 18 }}>Loading data, please wait...</p>
    </div>
  </>;
};
export default Loader;

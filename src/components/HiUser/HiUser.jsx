// src/components/HiUser.jsx

import { AiFillGithub } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import clsx from "clsx";
import css from "../HiUser/HiUser.module.css";

console.log(clsx("First", true && "Second", true && "Third")); // a b c

const HiUser = ({ name }) => {
  return (
    <>
      <h2>React Icon</h2>
      <div className={css.title}>
        <AiFillGithub className={css.icon} />
        <FcBusinessman size="40" />
        <p className={css.username}>{name}</p>
      </div>
    </>
  );
};

export default HiUser;

// src/components/UserMenu.jsx

import { useUser } from "../../userContext";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const { username } = useUser();

  return (
    <div>
      <p>Welcome, {username}!</p>
      <button className={css.btnContext}>Log out</button>
    </div>
  );
};

export default UserMenu;

// src/components/UserMenu.jsx

// import { useUser } from "../userContext";

// export const UserMenu = () => {
//   const { isLoggedIn, username, logOut, logIn } = useUser();

//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <p>{username}</p>
//           <button onClick={logOut}>Log out</button>
//         </>
//       ) : (
//         <button onClick={logIn}>Log in</button>
//       )}
//     </div>
//   );
// };

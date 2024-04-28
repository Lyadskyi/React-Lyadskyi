import { useState } from "react";
import { userContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <userContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};

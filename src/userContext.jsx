import { createContext, useContext } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

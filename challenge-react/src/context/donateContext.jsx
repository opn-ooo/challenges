import { useContext, createContext } from "react";

export const donateContext = createContext({
  donation: 0,
});

export const useDonate = () => useContext(donateContext);

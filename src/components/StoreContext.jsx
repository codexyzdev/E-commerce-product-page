import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <StoreContext.Provider value={{ count, setCount }}>
      {children}
    </StoreContext.Provider>
  );
}

import { createContext, useState } from "react";

export const BasketContext = createContext();

export default function Context({ children }) {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

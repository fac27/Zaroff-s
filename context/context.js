import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export default function Context({ children }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const localBasket = window.localStorage.getItem("basket");
    const newBasket = localBasket ? JSON.parse(localBasket) : [];
    console.log("📛 loading old basket");
    setBasket(newBasket);
  }, []);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

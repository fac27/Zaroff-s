import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export default function Context({ children }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const localBasket = window.localStorage.getItem("basket");
    const newBasket = localBasket ? JSON.parse(localBasket) : [];
    setBasket(newBasket);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

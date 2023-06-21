import Link from "next/link";
import { useEffect, useContext } from "react";
import BasketItem from "../components/BasketItem";
import { getAllIslands } from "@/utils/islands";
import { BasketContext } from "@/context/context";

export function getStaticProps() {
  const islands = getAllIslands().params;
  return {
    props: {
      islands,
    },
  };
}

export default function Basket({ islands }) {
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    if (!basket) window.localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    const localBasket = window.localStorage.getItem("basket");
    const newBasket = localBasket ? JSON.parse(localBasket) : [];
    setBasket(newBasket);
  }, [setBasket]);

  if (!basket) return;
  const basketData = islands.filter(island => basket.includes(island.name));
  const total = basketData.reduce((acc, curr) => (acc += curr.price), 0);

  return (
    <>
      <h1> Basket </h1>
      {basket &&
        basketData.map((islandData, i) => (
          <BasketItem key={i} islandData={islandData} />
        ))}
      <b>TOTAL: £{total}</b>
      <button onClick={() => window.alert("rich boy")}>CHECKOUT</button>
      <Link href="/"> 🔙 </Link>
    </>
  );
}

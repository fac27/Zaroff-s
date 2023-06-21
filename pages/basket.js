import Link from "next/link";
import { useContext } from "react";
import BasketItem from "../components/BasketItem";
import { getAllIslands } from "@/utils/islands";
import { BasketContext } from "@/context/context";
import { commas } from "@/utils/format";

export function getStaticProps() {
  const islands = getAllIslands().params;
  return {
    props: {
      islands,
    },
  };
}

export default function Basket({ islands }) {
  const { basket } = useContext(BasketContext);

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
      <b>TOTAL: £{commas(total)}</b>
      <button onClick={() => window.alert("rich boy")}>CHECKOUT</button>
      <Link href="/"> 🔙 </Link>
    </>
  );
}

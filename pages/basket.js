import Link from "next/link";
import { useContext } from "react";
import BasketItem from "../components/BasketItem";
import { getAllIslands } from "@/utils/islands";
import { BasketContext } from "@/context/context";
import { commas } from "@/utils/format";
import styles from "./basket.module.css";

export function getStaticProps() {
  const islands = getAllIslands();
  return {
    props: {
      params: { islands },
    },
  };
}

export default function Basket({ params: { islands } }) {
  const { basket } = useContext(BasketContext);

  if (!basket) return;
  const basketData = islands.filter(island => basket.includes(island.name));
  const total = basketData.reduce((acc, curr) => (acc += curr.price), 0);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.back}>
          🔙
        </Link>
        <h1 className={styles.title}> BASKET </h1>
      </nav>
      {basket &&
        basketData.map((islandData, i) => (
          <BasketItem key={i} islandData={islandData} />
        ))}
      <section className={styles.section}>
        <b>TOTAL: £{commas(total)}</b>
        <button onClick={() => window.alert("rich boy")}>CHECKOUT</button>
      </section>
    </>
  );
}

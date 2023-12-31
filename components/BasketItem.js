import Image from "next/image";
import styles from "./basketItem.module.css";
import { BasketContext } from "@/context/context";
import { useContext } from "react";
import { commas } from "@/utils/format";
export default function BasketItem({
  islandData: { img_path: imagePath, name: islandName, region, price },
}) {
  const { basket, setBasket } = useContext(BasketContext);

  function deleteButton() {
    const indexOfItem = basket.indexOf(islandName);
    const newBasket = [...basket];
    newBasket.splice(indexOfItem, 1);
    setBasket(newBasket);
  }

  return (
    <>
      <div className={styles.container}>
        <Image src={imagePath} alt={islandName} width={300} height={200} />
        <b>{islandName}</b>
        <small> {region}</small>
        <small> £{commas(price)}</small>
        <button onClick={deleteButton}> ⌫ </button>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

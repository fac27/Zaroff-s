import Image from "next/image";
import styles from "./basketItem.module.css";
import { BasketContext } from "@/context/context";
import { useContext } from "react";

export default function Item({
  islandData: { img_path: imagePath, name: islandName, region, price, area },
}) {
  const { basket, setBasket } = useContext(BasketContext);

  function deleteButton() {
    const indexOfItem = basket.indexOf(islandName);
    const newBasket = basket.toSpliced(indexOfItem, 1);
    setBasket(newBasket);
  }

  return (
    <div className={styles.container}>
      <Image src={imagePath} alt={islandName} width={300} height={200} />
      <b>{islandName}</b>
      <small> {region}</small>
      <p> £{price}</p>
      <button onClick={deleteButton}> ⌫ </button>
    </div>
  );
}

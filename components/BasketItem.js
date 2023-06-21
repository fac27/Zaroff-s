import Image from "next/image";
import styles from "./basketItem.module.css";
import { BasketContext } from "@/context/context";
import { useContext, useEffect } from "react";

export default function Item({
  islandData: { img_path: imagePath, name: islandName, region, price },
}) {
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    // const localBasket = window.localStorage.getItem("basket");
    // if (localBasket) return
    if (typeof basket !== "undefined")
      window.localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
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

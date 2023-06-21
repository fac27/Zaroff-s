import Image from "next/image";
import styles from "./basketItem.module.css";

export default function Item({
  islandData: { img_path: imagePath, name: islandName, region, price, area },
}) {
  return (
    <div className={styles.container}>
      <Image src={imagePath} alt={islandName} width={300} height={200} />
      <b>{islandName}</b>
      <small> {region}</small>
      <p> Quantity: 2</p>
      <p> £{price}</p>
      {/* delete button */}
      {/* <button onClick={}></button> */}
    </div>
  );
}

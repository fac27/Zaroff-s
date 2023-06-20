// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import styles from "./Tile.module.css";
import money from "../public/money.svg";
import location from "../public/location.svg";

export default function Tile({ island }) {
  const { img_path: imageUrl, name: islandName, region, price, area } = island;

  return (
    <figure className={`${styles.container} ${styles.width} ${styles.padding}`}>
      <Image
        src={imageUrl}
        alt={islandName}
        fill={true}
        style={{ objectFit: "contain" }}
      />
      <figcaption
        className={`${styles.flex} ${styles.spaceBetween} ${styles.imgPadding}`}
      >
        <b className={styles.noWrap}>{islandName}</b>
        <b className={styles.thin}>{area} acres</b>
      </figcaption>
      <figcaption
        className={`${styles.flex} ${styles.sg} ${styles.thin} ${styles.opacity}`}
      >
        <Image src={location} alt={"location"} width={15} height={15} />
        <small>{region}</small>
        <Image src={money} alt={"£"} width={15} height={15} />
        <small>GBP {price}</small>
      </figcaption>
      {/* <figcaption>
        <hr className={`${styles.width} ${styles.black}`} />
        <b className={styles.center}> {description}</b>
      </figcaption> */}
    </figure>
  );
}

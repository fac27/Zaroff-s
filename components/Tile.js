// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from './tile.module.css';

export default function Tile({ island }) {
  const { imageUrl, description, islandName, region, price, area } = island;
  return (
    <figure className={`${styles.container} ${styles.width} ${styles.padding}`}>
      <Image src={imageUrl} alt={islandName} width={300} />
      <figcaption className={`${styles.flex} ${styles.spaceBetween}`}>
        <b className={styles.noWrap}>{islandName}</b>
        <b className={styles.thin}>{area} acres</b>
      </figcaption>
      <figcaption
        className={`${styles.flex} ${styles.sg} ${styles.thin} ${styles.opacity}`}
      >
        <small>{region}</small>
        <small>GBP {price}</small>
      </figcaption>
      <figcaption>
        <hr className={`${styles.width} ${styles.black}`} />
        <b className={styles.center}> {description}</b>
      </figcaption>
    </figure>
  );
}

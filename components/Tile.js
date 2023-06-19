// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from './tile.module.css';

export default function Tile(props) {
  return (
    <article className={[styles.flex, styles.spaceBetween]}>
      <figure>
        <Image
          src={props.imageUrl}
          alt={props.islandName}
          width={200}
          height={200}
        />
        <caption className={styles.caption}>
          <b>{props.islandName}</b>
          <b className={styles.thin}>{props.area} acres</b>
        </caption>
      </figure>
      <div>
        <small>{props.region}</small>
        <small>GBP {props.price}</small>
        <p> {props.description}</p>
      </div>
      {/* <FontAwesomeIcon icon={'fa-regular fa-coin-vertical'} /> */}
    </article>
  );
}

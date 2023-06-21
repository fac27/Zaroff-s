import styles from "./TileContainer.module.css";
import Tile from "./Tile";

export default function TileContainer(props) {
  return (
    <main className={styles.main}>
      {props.islands
        .filter(
          (island) => island.region === props.filter || props.filter === "all"
        )
        .map((island, i) => (
          <Tile key={i} island={island} />
        ))}
    </main>
  );
}

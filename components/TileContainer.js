import styles from "./TileContainer.module.css";
import Tile from "./Tile";

export default function TileContainer({ islands, filter }) {

  return (
    <main className={styles.main}>
      {islands
        .filter((island) => island.region === filter || filter === "all")
        .map((island, i) => (
          <Tile key={i} island={island} />
        ))}
    </main>
  );
}

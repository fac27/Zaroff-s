import styles from "./TileContainer.module.css";
import Tile from "./Tile";

export default function TileContainer({
  islands,
  filter,
  priceLimit,
}) {
  return (
    <main className={styles.main}>
      {islands
        .filter(island => island.region === filter || filter === "all")
        .filter(island => island.price <= priceLimit || priceLimit === 0)
        .map((island, i) => (
          <Tile key={i} island={island} />
        ))}
    </main>
  );
}

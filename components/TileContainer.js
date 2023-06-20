import styles from "./TileContainer.module.css";
import Tile from "./Tile";

const islandExample = {
  description: "helipad, bar, beach",
  area: 100,
  price: 700000,
  region: "caribbean",
  islandName: "Los Islandes",
  imageUrl: "/images/2.jpg",
};

export default function TileContainer({ islands }) {
  return (
    <main className={styles.main}>
      {islands.map((island, i) => (
        <Tile key={i} island={island} />
      ))}
    </main>
  );
}

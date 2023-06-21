import styles from './TileContainer.module.css';
import Tile from './Tile';

export default function TileContainer({ islands }) {
  console.log('TileContainer', islands);
  return (
    <main className={styles.main}>
      {islands.map((island, i) => (
        <Tile key={i} island={island} />
      ))}
    </main>
  );
}

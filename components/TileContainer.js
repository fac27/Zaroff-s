import styles from "./TileContainer.module.css";
import Tile from "./Tile";

const islandExample = {
  description: "helipad, bar, beach",
  area: 100,
  price: 700000,
  region: "caribbean",
  islandName: "Los Islandes",
  imageUrl: "/images/1.jpg",
};

export default function TileContainer() {
  // fetch islands from db
  //   map over array of objects
  return <Tile island={islandExample} />;
}

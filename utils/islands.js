import { select_one_island, select_all_islands } from "./models/islands.js";

export function getAllIslands() {
  const allIslands = select_all_islands.all();
  return {
    params: [
      // name: island.name.toLowerCase().replace(/\s/g, '-'),
      ...allIslands,
    ],
  };
}

export default function getIslandData(id) {
  return select_one_island.get(id);
}

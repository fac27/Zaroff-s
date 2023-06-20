import getAllRegions from "../utils/islands.js";

export default function IslandFilter() {
  const allRegions = new Set(...getAllRegions());

  return (
    <select name="region" id="islands">
      <option value="all">All</option>
      {allRegions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default function IslandFilter({ regions }) {
  return (
    <select name="region" id="islands">
      <option value="all">All</option>
      {regions.map(region => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

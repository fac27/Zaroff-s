export default function IslandFilter({ regions, setFilter }) {
  function chooseFilter(e) {
    return setFilter(e.target.value);
  }

  return (
    <select name="region" id="islands" onChange={chooseFilter}>
      <option value="all">All</option>
      {regions.map(region => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

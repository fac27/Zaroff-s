export default function IslandFilter({ regions }) {
  function chooseFilter(e) {
    console.log(e.target.value);
    return setFilter(e.target.value);
  }

  return (
    <select name="region" id="islands">
      <option value="all" onChange={chooseFilter}>
        All
      </option>
      {regions.map((region) => (
        <option key={region} value={region} onChange={chooseFilter}>
          {region}
        </option>
      ))}
    </select>
  );
}

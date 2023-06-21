

export function PriceSorter({ prices, setPriceLimit }) {
  function choosePriceLimit(e) {
    return setPriceLimit(e.target.value);
  }

  return (
    <>
      <select name="price" id="prices" onChange={choosePriceLimit}>
        <option name="price" value="0">
          View all price ranges
        </option>
        {prices.map(price => (
          <option key={price} value={price}>
            view listings up to {price}
          </option>
        ))}
      </select>
    </>
  );
}

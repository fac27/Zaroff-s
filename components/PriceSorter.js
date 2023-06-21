export function PriceSorter({ prices, setPriceLimit }) {
  function choosePriceLimit(e) {
    return setPriceLimit(e.target.value);
  }

  const highestPrice = Math.round(prices.reduce((a, b) => a > b));

  return (
    <input
      type="range"
      id="prices"
      min="0"
      max={highestPrice}
      onChange={choosePriceLimit}
    />
  );
}

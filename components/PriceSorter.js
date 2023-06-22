import styles from "./PriceSorter.module.css";

export default function PriceSorter({ prices, priceLimit, setPriceLimit }) {
  function choosePriceLimit(e) {
    return setPriceLimit(e.target.value);
  }

  const highestPrice = Math.ceil(Math.max(...prices));
  const lowestPrice = Math.floor(Math.min(...prices));

  return (
    <>
      <label htmlFor="prices">
        £{priceLimit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </label>
      <input
        type="range"
        id="prices"
        value={priceLimit}
        min={lowestPrice}
        max={highestPrice}
        step={(highestPrice - lowestPrice) / 10}
        onChange={choosePriceLimit}
        className={styles.input}
      />
    </>
  );
}

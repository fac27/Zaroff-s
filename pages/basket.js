import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Basket() {
  const basket = useRef([]);

  function total() {
    return basket.current.reduce((acc, curr) => (acc += curr.price), 0);
  }

  // load local storage
  useEffect(() => {
    basket.current = localStorage.getItem('basket');
  }, []);
  return (
    <>
      <h1> Basket </h1>
      {basket.current.map((islandData, i) => (
        <Item key={i} islandData={islandData} />
      ))}
      <b>TOTAL: £{total()}</b>
      <button onClick={() => window.alert('rich boy')}>CHECKOUT</button>
      <Link href="/"> 🔙 </Link>
    </>
  );
}

function Item({
  islandData: { img_path: imagePath, name: islandName, region, price, area },
}) {
  return (
    <div className={styles.container}>
      <Image src={imagePath} alt={islandName} width={300} height={200} />
      <b>{islandName}</b>
      <small> {region}</small>
      <p> Quantity: 2</p>
      <p> £{price}</p>
    </div>
  );
}

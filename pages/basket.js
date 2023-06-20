import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useContext, useState } from 'react';
import { BasketContext } from '@/context/context';
import styles from './basket.module.css';

export default function Basket() {
  const { basket, setBasket } = useContext(BasketContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!basket.length) return;
    setTotal(basket.reduce((acc, curr) => (acc += curr.price), 0));
  }, [basket]);

  // load local storage if exists and set when leaving
  useEffect(() => {
    const oldBasket = window.localStorage.getItem('basket');
    if (oldBasket.length > 0) setBasket(JSON.parse(oldBasket));
    return () => {
      console.log('basket setting local storage');
      window.localStorage.setItem('basket', JSON.stringify(basket));
    };
  }, []);

  return (
    <>
      <h1> Basket </h1>
      {basket &&
        basket.map((islandData, i) => <Item key={i} islandData={islandData} />)}
      <b>TOTAL: £{total}</b>
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

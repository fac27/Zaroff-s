import Link from 'next/link';
import { useEffect, useContext } from 'react';
import { BasketContext } from '@/context/context';
import BasketItem from '../components/BasketItem';

export default function Basket() {
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    const oldBasket = window.localStorage.getItem('basket');
    if (oldBasket) setBasket(JSON.parse(oldBasket));
  }, [setBasket]);

  if (!basket.length) return;

  window.localStorage.setItem('basket', JSON.stringify(basket));

  const total = basket.reduce((acc, curr) => (acc += curr.price), 0);

  return (
    <>
      <h1> Basket </h1>
      {basket &&
        basket.map((islandData, i) => (
          <BasketItem key={i} islandData={islandData} />
        ))}
      <b>TOTAL: £{total}</b>
      <button onClick={() => window.alert('rich boy')}>CHECKOUT</button>
      <Link href="/"> 🔙 </Link>
    </>
  );
}

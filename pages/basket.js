import Link from 'next/link';
import { useEffect, useContext } from 'react';
import { BasketContext } from '@/context/context';
import BasketItem from '../components/BasketItem';
import { getAllIslands } from '@/utils/islands';

export function getStaticProps() {
  const islands = getAllIslands().params;
  return {
    props: {
      islands,
    },
  };
}

export default function Basket({ islands }) {
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    // console.log('📛 set storage');
    if (basket) window.localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    // console.log('🎊 read storage');
    const oldBasket = window.localStorage.getItem('basket');
    if (oldBasket) setBasket(JSON.parse(oldBasket));
  }, [setBasket]);

  if (!basket) return;
  const basketData = islands.filter((island) => basket.includes(island.name));
  const total = basketData.reduce((acc, curr) => (acc += curr.price), 0);

  return (
    <>
      <h1> Basket </h1>
      {basket &&
        basketData.map((islandData, i) => (
          <BasketItem key={i} islandData={islandData} />
        ))}
      <b>TOTAL: £{total}</b>
      <button onClick={() => window.alert('rich boy')}>CHECKOUT</button>
      <Link href="/"> 🔙 </Link>
    </>
  );
}

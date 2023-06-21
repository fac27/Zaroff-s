import { getIslandData, getAllIslands } from '../../utils/islands.js';
import Layout from '@/components/Layout.js';
import Head from 'next/head';
import { BasketContext } from '@/context/context.js';
import { useContext } from 'react';

// create paths for each existing island
export async function getStaticPaths() {
  const islands = getAllIslands();
  const paths = islands.params.map((island) => {
    return {
      params: {
        id: island.id,
        name: island.name.toLowerCase().replaceAll(/\s/g, '-'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const formattedName = params.name
    .replace(/\-/g, ' ')
    .replace(/\b\w/g, (match) => match.toUpperCase());
  const islandData = getIslandData(formattedName);
  return {
    props: {
      islandData,
    },
  };
}

export default function Island({ islandData }) {
  const { basket, setBasket } = useContext(BasketContext);
  function addToBasket() {
    console.log([...basket, islandData]);
    setBasket([...basket, islandData]);
  }

  return (
    <Layout>
      <Head>
        <title>{islandData.name}</title>
      </Head>
      <h1>Hello Welcome To {islandData.name}</h1>
      <button onClick={addToBasket}> Add to basket </button>
    </Layout>
  );
}

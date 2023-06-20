import Layout from '../components/Layout.js';
import Head from 'next/head';
import TileContainer from '../components/TileContainer';
import Image from 'next/image.js';
import { getAllIslands } from '/utils/islands.js';

export function getStaticProps() {
  const islands = getAllIslands();
  return {
    props: { islands: [...islands.params] },
  };
}

export default function Home({ islands }) {
  return (
    <Layout home>
      <Head>
        <title>Zaroffs Island Emporium</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Image src={'/images/41.jpg'} alt={'asdas'} width={1200} height={100} />
      <TileContainer islands={islands} />
    </Layout>
  );
}

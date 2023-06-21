import Layout from "../components/Layout.js";
import Head from "next/head";
import Banner from "../components/Banner.js";
import TileContainer from "../components/TileContainer";
import Image from "next/image.js";
import { getAllIslands } from "/utils/islands.js";

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
      </Head>
      <Banner />
      <TileContainer islands={islands} />
    </Layout>
  );
}

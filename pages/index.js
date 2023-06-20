import Layout from "../components/Layout.js";
import Head from "next/head";
import TileContainer from "../components/TileContainer";
import IslandFilter from "../components/IslandFilter.js";
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
      <Image src={"/images/41.jpg"} alt={"asdas"} width={1200} height={100} />
      <IslandFilter />
      <TileContainer islands={islands} />
    </Layout>
  );
}

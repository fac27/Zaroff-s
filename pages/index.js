import Layout from "../components/Layout.js";
import Head from "next/head";
import TileContainer from "../components/TileContainer";
import IslandFilter from "../components/IslandFilter.js";
import Image from "next/image.js";
import { getAllIslands, getAllRegions } from "/utils/islands.js";

export function getStaticProps() {
  const islands = getAllIslands();
  const dbCall = getAllRegions().map((region) => region.region);
  const allRegions = [...new Set(dbCall)];

  return {
    props: { islands: [...islands.params], regions: allRegions },
  };
}

export default function Home({ islands, regions }) {
  return (
    <Layout home>
      <Head>
        <title>Zaroffs Island Emporium</title>
      </Head>
      <Image src={"/images/41.jpg"} alt={"asdas"} width={1200} height={100} />
      <IslandFilter regions={regions} />
      <TileContainer islands={islands} />
    </Layout>
  );
}

import { useState } from "react";

import Layout from "../components/Layout.js";
import Head from "next/head";
import Banner from "../components/Banner.js";
import TileContainer from "../components/TileContainer";
import IslandFilter from "../components/IslandFilter.js";
import PriceSorter from "../components/PriceSorter.js";
import { getAllIslands } from "@/utils/islands.js";
import Navbar from "@/components/Navbar.js";

export function getStaticProps() {
  const islands = getAllIslands();

  const regions = [...new Set(islands.map(island => island.region))];
  const prices = [...new Set(islands.map(island => island.price))];

  return {
    props: {
      islands,
      regions,
      prices,
    },
  };
}

export default function Home({ islands, regions, prices }) {
  const [filter, setFilter] = useState("all");
  const [priceLimit, setPriceLimit] = useState(Math.ceil(Math.max(...prices)));

  return (
    <Layout home>
      <Head>
        <title>Zaroffs Island Emporium</title>
      </Head>

      <Banner />
      <Navbar
        regions={regions}
        setFilter={setFilter}
        prices={prices}
        priceLimit={priceLimit}
        setPriceLimit={setPriceLimit}
      />

      <TileContainer
        islands={islands}
        filter={filter}
        priceLimit={priceLimit}
      />
    </Layout>
  );
}

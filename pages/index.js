import { useState } from "react";

import Layout from "../components/Layout.js";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner.js";
import TileContainer from "../components/TileContainer";
import IslandFilter from "../components/IslandFilter.js";
import PriceSorter from "../components/PriceSorter.js";
import { getAllIslands, getAllRegions, getAllPrices } from "@/utils/islands.js";
import Navbar from "@/components/Navbar.js";

export function getStaticProps() {
  const islands = getAllIslands();

  const allRegions = [...new Set(getAllRegions().map(region => region.region))];

  const allPrices = [...new Set(getAllPrices().map(price => price.price))];

  return {
    props: {
      islands: [...islands.params],
      regions: allRegions,
      prices: allPrices,
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
      <Link href="/basket"> BASKET </Link>
      <Banner />
      <Navbar />
      <IslandFilter regions={regions} setFilter={setFilter} />
      <PriceSorter
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

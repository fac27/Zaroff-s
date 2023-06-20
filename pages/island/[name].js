import { getAllIslands } from "../../utils/islands.js";
import { getIslandData } from "@/utils/models/islands.js";
import Layout from "@/components/Layout.js";
import Head from "next/head";

// create paths for each existing island
export async function getStaticPaths() {
  const paths = getAllIslands();
  return {
    paths,
    fallback: false,
  };
}

// create props for each island from it's id fed from static paths
export async function getStaticProps({ params }) {
  console.log(params);
  const name = params.name.replace(/\-/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase());
  console.log(name);
  const islandName = await getIslandData(params.name);
  // console.log(typeof(getIslandData))
  // const islandData = getIslandData(neame);
  return {
    props: {
      islandData,
    },
  };
}

export default function Island({ islandData }) {
  return (
    <Layout>
      <Head>
        <title>{islandData}</title>
      </Head>
      <h1>Hello Island</h1>
    </Layout>
  );
}

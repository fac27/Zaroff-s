import { getIslandData, getAllIslands } from "../../utils/islands.js";
import Layout from "@/components/Layout.js";
import Head from "next/head";

// create paths for each existing island
export async function getStaticPaths() {
  const islands = getAllIslands();
  const paths = islands.params.map((island) => {
    return {
      params: {
        id: island.id,
        name: island.name.toLowerCase().replace(/\s/g, "-")
      }
    }
  });
  
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const formattedName = params.name.replace(/\-/g, " ").replace(/\b\w/g, match => match.toUpperCase());
  const islandData = getIslandData(formattedName); 

  return {
    props: {
      ...islandData,
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

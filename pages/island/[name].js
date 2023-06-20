import { getIslandData, getAllIslands } from "../../utils/islands.js";
import Layout from "@/components/Layout.js";
import Head from "next/head"

// create paths for each existing island
export async function getStaticPaths() {
  const paths = getAllIslands();
  return {
    paths,
    fallback: false,
  };
}

// create props for each island from it's id fed from static paths
export async function getStaticProps({ params }) { // how does getStaticProps work? Where are params coming from?
  console.log(params) // Only returning { name: 'sunset-haven' }
  const islandData = await getIslandData(params.name); // No id to return
  return {
    props: {
      islandData,
    },
  };
}

export default function Island({islandData}){
  return (
    <Layout>
      <Head>
        <title>{islandData}</title>
      </Head>
      <h1>Hello Island</h1>
    </Layout>
  )
}
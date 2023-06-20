import { getIslandData, getAllIslands } from "../../utils/islands.js";
import Layout from "@/components/Layout.js";
import Head from "next/head";
import Image from "next/image";

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

export function getStaticProps({ params }) {
  const formattedName = params.name.replace(/\-/g, " ").replace(/\b\w/g, match => match.toUpperCase());
  const islandData = getIslandData(formattedName); 
  return {
    props: {
      islandData,
    },
  };
}

export default function Island({islandData}) {
  return (
    <Layout>
      <Head>
        <title>{islandData.name}</title>
      </Head>
      <section>
        <Image alt={`An image of ${islandData.name}}`} src={islandData.image_path}></Image>
      </section>
      {/* new component passing islandData */}
      {/* <h1>Hello Welcome To {name}</h1> */}
    </Layout>
  );
}

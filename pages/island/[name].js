import { getIslandData, getAllIslands } from "../../utils/islands.js";

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
  const islandData = await getIslandData(params.name);
  return {
    props: {
      islandData,
    },
  };
}

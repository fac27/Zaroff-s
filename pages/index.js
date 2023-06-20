import Layout from "../components/Layout.js";
import Head from "next/head";
import TileContainer from "../components/TileContainer";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zaroffs Island Emporium</title>
      </Head>
      <section>
        <h1>Image of an Island here</h1>
      </section>
      <TileContainer />
    </Layout>
  );
}

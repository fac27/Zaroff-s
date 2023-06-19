import Layout from "../components/Layout.js";
import Head from "next/head";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zaroff's Island Emporium</title>
      </Head>
      <section>
        <h1>Image of an Island here</h1>
      </section>
      <section>
        <h2>Island Tiles here</h2>
      </section>
    </Layout>
  );
}

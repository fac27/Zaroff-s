import Layout from "../components/Layout.js";
import Head from "next/head";
import Tile from '../components/Tile';
import image from '../public/images/camera.example.jpg';

const islandExample = {
  description: 'helipad, bar, beach',
  area: 100,
  price: 700000,
  region: 'caribbean',
  islandName: 'Los Islandes',
  imageUrl: image,
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Zaroffs Island Emporium</title>
      </Head>
      <section>
        <h1>Image of an Island here</h1>
      </section>
      <Tile island={islandExample} />
    </Layout>
  );
}

import { getIslandData, getAllIslands } from "../../utils/islands.js";
import Layout from "@/components/Layout.js";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./islands.module.css";
import { BasketContext } from "@/context/context.js";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { commas } from "../../utils/format";

export async function getStaticPaths() {
  const islands = getAllIslands();
  const paths = islands.map(island => {
    return {
      params: {
        id: island.id,
        name: island.name.toLowerCase().replaceAll(/\s/g, "-"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const formattedName = params.name
    .replace(/\-/g, " ")
    .replace(/\b\w/g, match => match.toUpperCase());
  const islandData = getIslandData(formattedName);
  return {
    props: {
      islandData,
    },
  };
}

export default function Island({ islandData }) {
  const { push } = useRouter();
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    if (basket) {
      window.localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  function addToBasket() {
    if (basket.includes(islandData.name))
      return alert(`${islandData.name} already in basket`);
    setBasket([islandData.name, ...basket]);
    push("/basket");
  }

  return (
    <Layout style="styles">
      <Head>
        <title>{islandData.name}</title>
      </Head>
      <div className={`${styles.row} ${styles.pageContainer}`}>
        <section className={styles.imageContainer}>
          <Image
            alt={`A photo of ${islandData.name}`}
            src={islandData.img_path}
            width={600}
            height={700}
          ></Image>
        </section>
        <article className={styles.article}>
          <div
            className={`${styles.row} ${styles.spaceBetween} ${styles.alignCenter}`}
          >
            <h1 className={`${styles.title} ${styles.text}`}>
              {islandData.name}
            </h1>
            <h2 className={`${styles.keyInfo} ${styles.text}`}>
              £{commas(islandData.price)}
            </h2>
          </div>
          <h2 className={`${styles.keyInfo} ${styles.text}`}>
            {islandData.region}
          </h2>
          <h2 className={`${styles.keyInfo} ${styles.text}`}>
            {islandData.area} acres
          </h2>
          <p className={`${styles.description} ${styles.text}`}>
            {islandData.description}
          </p>
          <div className={`${styles.row} ${styles.spaceAround}`}>
            {/* <Link href={"/basket"}> */}
            <button
              className={`${styles.button} ${styles.text}`}
              onClick={addToBasket}
            >
              Add to Basket
            </button>
            {/* </Link> */}
            <Link className={`${styles.button} ${styles.text}`} href="/">
              Back to Listings
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}

import Head from "next/head";

const siteTitle = "Zaroff's Island Emporium";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </>
  );
}

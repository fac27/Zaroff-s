import Head from "next/head";
import Link from "next/link";

const siteTitle = "Zaroff's Island Emporium";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && <Link href="/">Back to home</Link>}
    </>
  );
}

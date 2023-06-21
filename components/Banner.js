import Image from "next/image";
import styles from "./Banner.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Banner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        bannerRef.current.style.height = "100px";
        bannerRef.current.style.padding = "25px 10px";
        titleRef.current.style.opacity = "0";
      } else {
        bannerRef.current.style.height = "500px";
        bannerRef.current.style.padding = "90px 10px";
        titleRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={styles.banner__outer} ref={bannerRef}>
        <div className={styles.banner__nav}>Navigation</div>
        <div className={styles.banner__title} ref={titleRef}>
          <h1>Zaroff&apos;s Island Emporium</h1>
          <h2>Because finding your island paradise shouldn&apos;t be atoll</h2>
        </div>
      </div>
    </header>
  );
}

{
  /* <div className={styles.banner__nav}>
  <Link href="/">home</Link>
  <Link href="#islands">Our islands</Link>
</div>; */
}
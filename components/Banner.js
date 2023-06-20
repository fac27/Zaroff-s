import Image from "next/image";
import styles from "./Banner.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const handleScroll = () => {
      //   if (document.body.scrollTop > 90 ||
      //     document.documentElement.scrollTop > 90)
      // {
      //     document.getElementById("navlist")
      //                 .style.padding = "25px 10px";
      //     document.getElementById("logo")
      //             .style.fontSize = "24px";
      // }
      // else {
      //     document.getElementById("navlist")
      //                 .style.padding = "90px 10px";
      //     document.getElementById("logo")
      //                 .style.fontSize = "35px";
      // }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={styles.banner__title}>
        <h1>Zaroff&apos;s Island Emporium</h1>
        <h2>Because finding your island paradise shouldn&apos;t be atoll</h2>
      </div>
      <div className={styles.banner__nav}>
        <Link href="/">home</Link>
        <Link href="#islands">Our islands</Link>
      </div>
    </header>
  );
}

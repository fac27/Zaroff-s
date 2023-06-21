import Context from "../context/context";
import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

import "@/styles/globals.css";
import {GoogleTagManager} from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-K7KTVB8Q" />
      <Component {...pageProps} />
    </>
  );
}

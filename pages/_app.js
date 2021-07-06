import Head from "next/head";
import Theme from "@/components/theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Photo</title>
      </Head>

      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;

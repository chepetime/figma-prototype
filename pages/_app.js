import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import Theme from "@/components/theme/Theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Photo</title>
      </Head>

      <Theme>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Theme>
    </>
  );
}

export default MyApp;

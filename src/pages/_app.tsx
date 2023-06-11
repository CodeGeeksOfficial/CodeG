import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { wrapper } from "src/core/redux/store";
import { AuthContextProvider } from '../utils/auth'
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";

const TopProgressBar = dynamic(
  () => {
    return import("src/components/common/Loaders/TopProgressBar");
  },
  { ssr: false },
);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV === "production" && <title>CodeG</title>}
      </Head>
      <AuthContextProvider>
        <ChakraProvider>
          <TopProgressBar/>
          <div className="selection:bg-[#00ffc38a]">
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </AuthContextProvider>
    </>
  );
}

export default wrapper.withRedux(App);

import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { Provider } from "react-redux";
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

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Head>
        {process.env.NODE_ENV === "production" && <title>CodeG</title>}
      </Head>
      <Provider store={store}>
        <AuthContextProvider>
          <ChakraProvider>
            <TopProgressBar/>
            <div className="selection:bg-[#00ffc38a]">
              <Component {...props.pageProps} />
            </div>
          </ChakraProvider>
        </AuthContextProvider>
      </Provider>
    </>
  );
}

export default App;

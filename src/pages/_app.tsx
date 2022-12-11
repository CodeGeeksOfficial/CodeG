import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <Head>
      {process.env.NODE_ENV==="production" && <title>CodeG</title>}
    </Head>
    <Component {...pageProps} />
  </div>)
}

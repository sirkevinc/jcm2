// @ts-nocheck 

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../util/createEmotionCache'

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

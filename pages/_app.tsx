import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Head from 'next/head'

import '../styles/global.scss'

import { PlayerContextProvider } from '../contexts/playerContext'
import { MainLayout } from '../layouts/MainLayout'
import { MediaContextProvider } from '../contexts/mediaContext'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cookie Player 2</title>
      </Head>

      <PlayerContextProvider>
        <MediaContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </MediaContextProvider>
      </PlayerContextProvider>
    </>
  )
}

export default MyApp

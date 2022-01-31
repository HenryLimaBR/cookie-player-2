import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Head from 'next/head'

import '../styles/global.scss'

import { MainLayout } from '../layouts/MainLayout'
import { PlayerContextProvider } from '../contexts/playerContext'
import { MediaContextProvider } from '../contexts/mediaContext'
import { SearchContextProvider } from '../contexts/searchContext'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cookie Player 2</title>
      </Head>

      <PlayerContextProvider>
        <MediaContextProvider>
          <SearchContextProvider>

            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>

          </SearchContextProvider>
        </MediaContextProvider>
      </PlayerContextProvider>
    </>
  )
}

export default MyApp

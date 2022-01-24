import type { NextPage } from 'next'
import Head from 'next/head'

import { PageWrapper } from '../styles/Pages'

import { Loader } from '../components/Loader'

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>🍁 Cookie Player 2</title>
      </Head>

      <Loader />
    </PageWrapper>
  )
}

export default Home

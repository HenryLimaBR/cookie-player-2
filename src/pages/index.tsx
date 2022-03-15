import type { NextPage } from 'next'
import Head from 'next/head'

import { PageWrapper } from '../styles/Pages'

interface Props {
}

const Home: NextPage<Props> = (props) => {
  return (
    <PageWrapper>
      <Head>
        <title>Cookie Player 2</title>
      </Head>
    </PageWrapper>
  )
}

export default Home

import React from 'react'
import { NextPage } from 'next'

import { PageWrapper } from '../styles/Pages'

type Custom500PageProps = {
  children?: React.ReactNode
}

const Custom500: NextPage<Custom500PageProps> = (props) => {
  return (
    <PageWrapper>
      <h1>500 - Internal Server Error!</h1>
    </PageWrapper>
  )
}

export default Custom500
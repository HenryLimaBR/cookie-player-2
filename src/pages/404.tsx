import React from 'react'
import { NextPage } from 'next'

import { PageWrapper } from '../styles/Pages'

type Custom404PageProps = {
  children?: React.ReactNode
}

const Custom404: NextPage<Custom404PageProps> = (props) => {
  return (
    <PageWrapper>
      <h1>404 - Page Not Found!</h1>
    </PageWrapper>
  )
}

export default Custom404
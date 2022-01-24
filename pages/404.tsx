import React from 'react'
import { NextPage } from 'next'

import { PageWrapper } from '../styles/Pages'

interface IProps {
  children?: React.ReactNode
}

const Custom404: NextPage = (props: IProps) => {
  return (
    <PageWrapper>
      <h1>404 - Page Not Found!</h1>
    </PageWrapper>
  )
}

export default Custom404
import React from 'react'
import { NextPage } from 'next'

import { PageWrapper } from '../styles/Pages'

interface IProps {
  children?: React.ReactNode
}

const Custom500: NextPage = (props: IProps) => {
  return (
    <PageWrapper>
      <h1>500 - Internal Server Error!</h1>
    </PageWrapper>
  )
}

export default Custom500
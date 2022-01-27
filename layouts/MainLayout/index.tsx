import React from 'react'

import { ContentWrapper, LayoutWrapper } from './styles'

import { Navbar } from '../../components/Navbar'
import { Playerbar } from '../../components/Playerbar'

type MainLayoutProps = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <LayoutWrapper>
      <Navbar />

      <ContentWrapper>
        {props.children}
      </ContentWrapper>

      <Playerbar />
    </LayoutWrapper>
  )
}
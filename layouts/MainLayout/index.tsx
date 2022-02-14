import React from 'react'

import { ContentWrapper, LayoutWrapper } from './styles'

import { Sidebar } from '../../components/Sidebar'
import { Playerbar } from '../../components/Playerbar'

type MainLayoutProps = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <LayoutWrapper>
      <Sidebar />

      <ContentWrapper>
        {props.children}
      </ContentWrapper>

      <Playerbar />
    </LayoutWrapper>
  )
}
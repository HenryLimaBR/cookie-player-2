import React from 'react'

import { ContentWrapper, LayoutWrapper } from './styles'

import { Navbar } from '../../components/Navbar'
import { Playerbar } from '../../components/Playerbar'

interface IProps {
  children?: React.ReactNode
}

export const MainLayout: React.FC<IProps> = (props) => {
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
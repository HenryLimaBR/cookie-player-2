import React, { useContext } from 'react'

import { ContentWrapper, LayoutWrapper } from './styles'

import { Sidebar } from '../../components/Sidebar'
import { Playerbar } from '../../components/Playerbar'
import { layoutContext } from '../../contexts/layoutContext'

type MainLayoutProps = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const [sidebar] = useContext(layoutContext).sidebar

  return (
    <LayoutWrapper sidebar={sidebar}>
      {
        sidebar && <Sidebar />
      }

      <ContentWrapper>
        {props.children}
      </ContentWrapper>

      <Playerbar />
    </LayoutWrapper>
  )
}
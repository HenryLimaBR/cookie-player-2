import React from 'react'
import { Searchbox } from '../Searchbox'

import { SidebarWrapper } from './styles'

type SidebarProps = {}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <SidebarWrapper>
      <Searchbox />
    </SidebarWrapper>
  )
}
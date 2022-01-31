import styled from 'styled-components'
import { theme } from '../../themes/default'

export const SidebarWrapper = styled.aside`
  grid-area: Sidebar;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: ${theme.colors.bg4};
`
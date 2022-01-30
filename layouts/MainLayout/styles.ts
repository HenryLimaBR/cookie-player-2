import styled from 'styled-components'

import { theme } from '../../themes/default'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 54px 1fr 72px;
  grid-template-areas: 'Navbar' 'Main' 'Playerbar';

  width: 100%;
  height: 100%;

  background-color: ${theme.colors.bg1};
`

export const ContentWrapper = styled.div`
  grid-area: Main;
  overflow: hidden;
`
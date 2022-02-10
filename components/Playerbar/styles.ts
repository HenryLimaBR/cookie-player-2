import styled from 'styled-components'
import { theme } from '../../themes/default'

export const PlayerbarWrapper = styled.footer`
  grid-area: Playerbar;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: ${theme.colors.bg3};
`
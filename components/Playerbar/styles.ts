import styled from 'styled-components'
import { theme } from '../../themes/default'

export const PlayerbarWrapper = styled.footer`
  grid-area: Playerbar;

  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 1fr;

  background-color: ${theme.colors.bg3};
`
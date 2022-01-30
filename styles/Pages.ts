import styled from 'styled-components'
import { theme } from '../themes/default'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${theme.colors.fg5};

  overflow: auto;
`
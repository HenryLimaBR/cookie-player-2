import styled from 'styled-components'
import { theme } from '../../themes/default'

export const NavbarWrapper = styled.nav`
  grid-area: Navbar;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  background-color: ${theme.colors.bg3};
`
export const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60%;

  margin: 0 0.5rem;
  padding: 0 1rem;
  border-radius: 6px;

  background-color: ${theme.colors.bg5};
  transition: background-color .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.bg4};
  }
`
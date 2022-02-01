import styled from 'styled-components'
import { theme } from '../../themes/default'

export const ListWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);

  overflow-y: auto;

  &::-webkit-scrollbar {
    appearance: none;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.bg3};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {	
    height: 10%;
    background-color: ${theme.colors.fg1};
    border-radius: 4px;

    &:hover {
      background-color: ${theme.colors.fg2};
    }
  }
`

export const ListComponent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`

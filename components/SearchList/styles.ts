import styled from 'styled-components'

export const SearchListWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);

  overflow-y: auto;
`

export const SearchListComponent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`

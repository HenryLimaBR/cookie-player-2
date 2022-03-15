import styled from 'styled-components'

export const ListWrapper = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 16px);

  overflow-y: auto;

  &::-webkit-scrollbar {
    appearance: none;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #333538;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {	
    height: 10%;
    background-color: #737578;
    border-radius: 4px;

    &:hover {
      background-color: #a3a5a8;
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

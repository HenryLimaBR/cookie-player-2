import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 32px;

  margin-top: 12px;
  
  border-radius: 4px;

  background-color: #232528;
  overflow: hidden;

  div {
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 85%;
    height: 100%;

    input[type='text'] {
      width: calc(100% - 24px);
      height: 100%;

      padding: 4px 8px;
      border: 0;
      outline: 0;

      font-size: 14px;

      color: #c3c5c8;
      background-color: transparent;

      &::placeholder {
        color: #838588;
      }
    }

    .clear {
      position: absolute;

      width: 16px;
      height: 16px;
      right: 8px;

      border: 0;
      border-radius: 50%;

      background-color: #838588;
      transition: 250ms ease-out;
      animation: ${zoomIn} 100ms ease-out backwards;
      cursor: pointer;

      &:hover {
        background-color: #a3a5a8;
        transform: scale(1.1);
      }
    }
  }

  .search {
    width: 15%;
    height: 100%;

    border: 0;

    background-color: #838588;
    transition: 250ms ease-out;
    cursor: pointer;

    color: #030508;

    &:hover {
      background-color: #a3a5a8;
      transform: scale(1.1);
    }

    &:active {
      background-color: #f3f5f8;
    }
  }  
`
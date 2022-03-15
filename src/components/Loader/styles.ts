import styled, { keyframes } from 'styled-components'

type StyledLoaderProps = {
  size: number
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div<StyledLoaderProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);

  div {
    width: inherit;
    height: inherit;

    border-radius: 50%;

    border-width: 2px;
    border-style: solid;
    border-color: #a3a5a8 #a3a5a844 #a3a5a8 #a3a5a8;

    animation: ${rotate} 1s ease infinite;
  }
`
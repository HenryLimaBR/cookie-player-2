import styled, { keyframes } from 'styled-components'

type SoundBarsWrapperProps = {
  size: number
}

const barsExpandAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 90%
  }
`

export const SoundBarsWrapper = styled.div<SoundBarsWrapperProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  div {
    width: 20%;
    height: 90%;

    border-radius: 6px;

    background-color: #838588;

    animation: ${barsExpandAnimation} 500ms ease-in-out infinite alternate backwards;
  }

  div:nth-child(1) { animation-delay: 0 }
  div:nth-child(2) { animation-delay: 250ms; }
  div:nth-child(3) { animation-delay: 500ms; }
`
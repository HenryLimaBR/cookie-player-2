import styled from 'styled-components'

export const SliderWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  
  &:hover > div > span:nth-child(1) {
    background-color: #838588;
  }

  &:hover > div > span:nth-child(2) {
    background-color: #a3a5a8;
    transform: translateX(-50%) scale(1.25);
  }
`

export const SliderTrack = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4px;

  border-radius: 2px;

  background-color: #030508;
`

export const SliderRange = styled.span<{ rangeWidth?: number }>`
  position: absolute;
  left: 0;

  width: ${({ rangeWidth }) => typeof rangeWidth !== 'undefined' ? rangeWidth : 50}%;
  height: 100%;

  border-radius: 2px;

  user-select: none;
  pointer-events: none;

  background-color: #535558;

  transition: 100ms ease-out;
`
export const SliderThumb = styled.span<{ left?: number }>`
  position: absolute;
  left: ${({ left }) => typeof left !== 'undefined' ? left : 0}%;

  width: 12px;
  height: 12px;

  user-select: none;
  pointer-events: none;

  border-radius: 50%;

  background-color: #838588;

  transform: translateX(-50%);

  transition: 100ms ease-out;
`
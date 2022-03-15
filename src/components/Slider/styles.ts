import styled from 'styled-components'

type SliderWrapperProps = {
  thumbVisibility: string
  isDragging: boolean
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  
  &:hover > div > span:nth-child(1) {
    background-color: #838588;
  }

  & > div > span:nth-child(2) {
    display: ${props => props.thumbVisibility !== 'never' ? 'block' : 'none'};

    opacity: ${props => props.thumbVisibility === 'always'
      ? 1
      : props.thumbVisibility === 'hover' && props.isDragging
        ? 1
        : 0
    };

  }

  &:hover > div > span:nth-child(2) {
    background-color: #a3a5a8;
    transform: translateX(-50%) scale(1.25);
    opacity: ${props => props.thumbVisibility === 'hover' ? 1 : 'unset'};
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

type SliderRangeProps = {
  rangeWidth?: number
}

export const SliderRange = styled.span<SliderRangeProps>`
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

type SliderThumbProps = {
  left?: number
}

export const SliderThumb = styled.span<SliderThumbProps>`
  position: absolute;
  left: 0;
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
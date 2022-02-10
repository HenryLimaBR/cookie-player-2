import styled from 'styled-components'
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider'
import { theme } from '../../themes/default'

export const SliderRoot = styled(Root)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > span .slider-range {
    background-color: ${theme.colors.fg5};
  }

  &:hover > span .slider-thumb {
    opacity: 1;
  }
`

export const SliderTrack = styled(Track)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4px;
  border-radius: 2px;

  background-color: ${theme.colors.bg4};
`

export const SliderRange = styled(Range)`
  position: absolute;
  display: block;

  height: 4px;

  border-radius: 2px;

  background-color: ${theme.colors.fg2};
`

export const SliderThumb = styled(Thumb)`
  display: flex;

  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: ${theme.colors.l1};
  opacity: 0;

  &:focus {
    outline: 0;
  }
`
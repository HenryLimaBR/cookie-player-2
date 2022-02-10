import React, { forwardRef } from 'react'

import RadixSlider from '@radix-ui/react-slider'
import Radix from '@radix-ui/react-primitive'

import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb
} from './styles'

type Props = {
  children?: React.ReactNode
}

const Slider = forwardRef<
  React.ElementRef<typeof RadixSlider.Root>,
  Radix.ComponentPropsWithoutRef<typeof RadixSlider.Root> & Props
>((props, ref) => (
    <SliderRoot {...props} ref={ref}>
      <SliderTrack>
        <SliderRange className='slider-range' />
      </SliderTrack>
      <SliderThumb className='slider-thumb' />
    </SliderRoot>
))

Slider.displayName = 'Slider'

export { Slider }
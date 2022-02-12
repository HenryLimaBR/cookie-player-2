import React, { useCallback, useEffect, useState } from 'react'

import { SliderRange, SliderThumb, SliderTrack, SliderWrapper } from './styles'

type Props = {
  children?: React.ReactNode
  min?: number
  max?: number
  defaultValue?: number
  value?: number
  onValueChange?: (value: number) => void
}

export const Slider: React.FC<Props> = ({
  min = 0, max = 100, defaultValue = 0, value: valueProp, onValueChange
}) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(typeof valueProp !== 'undefined' ? valueProp : defaultValue)
  }, [valueProp, defaultValue])

  const setValueByPosAndDispatch = useCallback((value: number,) => {
    setValue(value)
    if (onValueChange) onValueChange(value)
  }, [onValueChange])

  const parsePosToValue = useCallback((pos: number, width: number) => {
    return pos >= 0 && pos <= width
      ? Math.round((pos / width) * max)
      : pos < 0 ? min : max
  }, [min, max])

  const handleDrag = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()

    const mouseUpListener = () => {
      window.removeEventListener('mouseup', mouseUpListener)
      window.removeEventListener('mousemove', mouseMoveListener)
      window.removeEventListener('mouseleave', mouseUpListener)
    }

    const mouseMoveListener = (e: MouseEvent) => {
      setValueByPosAndDispatch(parsePosToValue(e.clientX - left, width))
    }

    window.addEventListener('mouseup', mouseUpListener)
    window.addEventListener('mousemove', mouseMoveListener)
    window.addEventListener('mouseleave', mouseUpListener)
  }, [parsePosToValue, setValueByPosAndDispatch])

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setValueByPosAndDispatch(
      parsePosToValue(
        e.nativeEvent.offsetX,
        e.currentTarget.getBoundingClientRect().width
      ))
  }, [parsePosToValue, setValueByPosAndDispatch])

  return (
    <SliderWrapper onMouseDown={handleDrag} onClick={handleClick} draggable='false'>
      <SliderTrack>
        <SliderRange rangeWidth={Math.round((value / max) * 100)} />
        <SliderThumb left={Math.round((value / max) * 100)} />
      </SliderTrack>
    </SliderWrapper>
  )
}
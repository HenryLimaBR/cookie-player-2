import React, { useCallback, useEffect, useState } from 'react'

import { SliderRange, SliderThumb, SliderTrack, SliderWrapper } from './styles'

type Props = {
  children?: React.ReactNode
  min?: number
  max?: number
  defaultValue?: number
  value?: number
  thumbVisibility?: 'always' | 'hover' | 'never'
  onChange?: (value: number) => void
  onLastChange?: (value: number) => void
  onDragToggle?: (drag: boolean) => void
}

export const Slider: React.FC<Props> = ({
  min = 0, max = 100, defaultValue = 0, value: valueProp,
  thumbVisibility = 'always',
  onChange, onLastChange, onDragToggle
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    !isDragging
      && setValue(typeof valueProp !== 'undefined' ? valueProp : defaultValue)
  }, [valueProp, defaultValue, isDragging])

  const dispatchOnChange = useCallback((value: number) => {
    onChange && onChange(value)
  }, [onChange])

  const dispatchOnLastChange = useCallback((value: number) => {
    onLastChange && onLastChange(value)
  }, [onLastChange])

  const dispatchOnDragToggle = useCallback((drag: boolean) => {
    onDragToggle && onDragToggle(drag)
  }, [onDragToggle])

  const parsePosToValue = useCallback((pos: number, width: number) => {
    return pos >= 0 && pos <= width
      ? Math.round((pos / width) * max)
      : pos < 0 ? min : max
  }, [min, max])

  const handleDrag = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true)
    dispatchOnDragToggle && dispatchOnDragToggle(true)

    const { left, width } = e.currentTarget.getBoundingClientRect()
    let value = 0

    const mouseUpListener = () => {
      window.removeEventListener('mouseup', mouseUpListener)
      window.removeEventListener('mousemove', mouseMoveListener)
      window.removeEventListener('mouseleave', mouseUpListener)

      dispatchOnLastChange(value)

      setIsDragging(false)
      dispatchOnDragToggle && dispatchOnDragToggle(false)
    }

    const mouseMoveListener = (e: MouseEvent) => {
      value = parsePosToValue(e.clientX - left, width)
      setValue(value)
      dispatchOnChange(value)
    }

    window.addEventListener('mousemove', mouseMoveListener)
    window.addEventListener('mouseup', mouseUpListener)
    window.addEventListener('mouseleave', mouseUpListener)

  }, [parsePosToValue, dispatchOnChange, dispatchOnLastChange, dispatchOnDragToggle])

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetX } = e.nativeEvent
    const { width } = e.currentTarget.getBoundingClientRect()
    const value = parsePosToValue(offsetX, width)
    setValue(value)
    dispatchOnChange(value)
    dispatchOnLastChange(value)
  }, [parsePosToValue, dispatchOnChange, dispatchOnLastChange])

  return (
    <SliderWrapper
      onMouseDown={handleDrag}
      onClick={handleClick}
      draggable='false'
      thumbVisibility={thumbVisibility}
      isDragging={isDragging}
    >
      <SliderTrack>
        <SliderRange
          rangeWidth={Math.round((value / max) * 100)}
        />

        {
          thumbVisibility !== 'never' && (
            <SliderThumb
              left={Math.round((value / max) * 100)}
            />
          )
        }
      </SliderTrack>
    </SliderWrapper>
  )
}
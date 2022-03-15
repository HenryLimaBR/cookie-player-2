import React from 'react'
import { SoundBarsWrapper } from './style'

type Props = {
  size?: number
}

export const SoundBars: React.FC<Props> = (props) => {
  return (
    <SoundBarsWrapper size={props.size || 32}>
      <div></div>
      <div></div>
      <div></div>
    </SoundBarsWrapper>
  )
}
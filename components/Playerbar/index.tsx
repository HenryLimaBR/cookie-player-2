import React from 'react'

import { PlayerbarWrapper } from './styles'

import { AudioControls } from '../AudioControls'
import { VolumeSlider } from '../VolumeSlider'

type PlayerbarProps = {
  children?: React.ReactNode
}

export const Playerbar: React.FC<PlayerbarProps> = (props) => {

  return (
    <PlayerbarWrapper>
      <div/>
      <AudioControls />
      <VolumeSlider />
    </PlayerbarWrapper>
  )
}
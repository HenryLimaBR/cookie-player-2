import React from 'react'

import { PlayerbarWrapper } from './styles'

import { VolumeSlider } from '../VolumeSlider'

type PlayerbarProps = {
  children?: React.ReactNode
}

export const Playerbar: React.FC<PlayerbarProps> = (props) => {

  return (
    <PlayerbarWrapper>
      <div/>
      <div />
      <VolumeSlider />
    </PlayerbarWrapper>
  )
}
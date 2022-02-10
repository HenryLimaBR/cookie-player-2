import React, { useCallback, useContext, useState } from 'react'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'

import { VolumeWrapper } from './styles'

import { Slider } from '../Slider'
import { playerContext } from '../../contexts/playerContext'

type Props = {
  children?: React.ReactNode
}

export const VolumeSlider: React.FC<Props> = (props) => {
  const [prevVolume, setPrevVolume] = useState(0)
  const [volume, setVolume] = useContext(playerContext).volumeState

  const handleMute = useCallback(() => {
    if (volume > 0) {
      setPrevVolume(volume)
      setVolume(0)
    } else {
      setVolume(prevVolume)
      setPrevVolume(0)
    }
  }, [setVolume, volume, prevVolume])

  return (
    <VolumeWrapper>
      <button className='mute-btn' onClick={handleMute}>
        {
          volume > 0
            ? <MdVolumeUp size={24} />
            : <MdVolumeOff size={24} />
        }
      </button>
      <Slider
        onValueChange={([v]) => setVolume(v)}
        value={[volume]}
        defaultValue={[50]}
      />
    </VolumeWrapper>
  )
}
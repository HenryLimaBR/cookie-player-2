import React, { useContext, useState } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'

import { AudioButtonWrapper, AudioControlsWrapper, AudioPlaybackSliderWrapper } from './styles'
import { playerContext } from '../../contexts/playerContext'
import { Slider } from '../Slider'
import { parseSeconds } from '../../utils/time'

type Props = {}

export const AudioControls: React.FC<Props> = (props) => {
  const { duration, isPlaying, player } = useContext(playerContext)
  const [currentTime, setCurrentTime] = useContext(playerContext).currentTimeState

  const [time, setTime] = useState(0)
  const [drag, setDrag] = useState(false)

  return (
    <AudioControlsWrapper>

      <AudioPlaybackSliderWrapper>
        <span>
          {
            drag
              ? parseSeconds(time, duration)
              : parseSeconds(currentTime, duration)
          }
        </span>
        <Slider
          min={0}
          max={duration}
          defaultValue={0}
          value={currentTime}
          thumbVisibility='hover'
          onChange={setTime}
          onLastChange={setCurrentTime}
          onDragToggle={setDrag}
        />
        <span>{parseSeconds(duration, duration)}</span>
      </AudioPlaybackSliderWrapper>

      <AudioButtonWrapper>
        <button
          className='play'
          onClick={() => isPlaying ? player.pause() : player.play()}
        >
          {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
        </button>
      </AudioButtonWrapper>

    </AudioControlsWrapper>
  )
}
import React, { createContext, useEffect, useCallback, useState } from 'react'

import type { State } from '../@types/generic'
import { useLocalStorage } from '../hooks/useLocalStorage'

type PlayerContextProps = {
  player: HTMLAudioElement
  isPlaying: boolean
  duration: number
  volumeState: State<number, (volume: number) => void>
  currentTimeState: State<number, (currentTime: number) => void>
}

export const playerContext = createContext({} as PlayerContextProps)

type Props = {
  children: React.ReactNode
}

export const PlayerContextProvider: React.FC<Props> = (props) => {
  const [player, setPlayer] = useState<HTMLAudioElement>({} as HTMLAudioElement)
  const [currentTime, setCurrentTimeState] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useLocalStorage('@cp2/volume', 25)

  useEffect(() => {
    if (!(player instanceof HTMLAudioElement)) {
      setPlayer(new window.Audio())
    } else {
      player.volume = volume / 100

      const currentTimeCallback = () => {
        setCurrentTimeState(player.currentTime)
      }
      const isPlayingCallback = () => {
        setIsPlaying(!player.paused && !player.ended)
      }
      const durationCallback = () => {
        setDuration(player.duration)
      }
      const volumeCallback = () => {
        setVolumeState(Math.floor(player.volume * 100))
      }

      player.addEventListener('timeupdate', currentTimeCallback)

      player.addEventListener('playing', isPlayingCallback)
      player.addEventListener('pause', isPlayingCallback)
      player.addEventListener('ended', isPlayingCallback)

      player.addEventListener('canplay', durationCallback)

      player.addEventListener('volumechange', volumeCallback)

      return () => {
        player.removeEventListener('timeupdate', currentTimeCallback)

        player.removeEventListener('playing', isPlayingCallback)
        player.removeEventListener('pause', isPlayingCallback)
        player.removeEventListener('ended', isPlayingCallback)

        player.removeEventListener('canplay', durationCallback)

        player.removeEventListener('volumechange', volumeCallback)
      }
    }
  }, [player, volume, setVolumeState])

  const setVolume = useCallback((vol: number) => {
    player.volume = vol / 100
  }, [player])

  const setCurrentTime = useCallback((time: number) => {
    player.currentTime = time
  }, [player])

  return (
    <playerContext.Provider
      value={{
        player,
        isPlaying,
        duration,
        volumeState: [volume, setVolume],
        currentTimeState: [currentTime, setCurrentTime]
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}
import React, { createContext, useEffect, useCallback, useState } from 'react'
import { State } from '../@types/generic'

type PlayerContextProps = {
  player: HTMLAudioElement
  currentTime: number
  isPlaying: boolean
  duration: number
  play: () => Promise<void>
  volumeState: State<number, (volume: number) => void>
}

export const playerContext = createContext({} as PlayerContextProps)

type Props = {
  children: React.ReactNode
}

export const PlayerContextProvider: React.FC<Props> = (props) => {
  const [player, setPlayer] = useState<HTMLAudioElement>({} as HTMLAudioElement)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, setStateVolume] = useState(50)

  useEffect(() => {
    if (!(player instanceof HTMLAudioElement)) {
      setPlayer(new Audio())
    } else {
      const currentTimeCallback = () => {
        setCurrentTime(player.currentTime)
      }
      const isPlayingCallback = () => {
        setIsPlaying(!player.paused && !player.ended)
      }
      const durationCallback = () => {
        setDuration(player.duration)
      }
      const volumeCallback = () => {
        setStateVolume(Math.floor(player.volume * 100))
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
  }, [player, setStateVolume])

  const play = useCallback(async () => {
    player.play()
  }, [player])

  const setVolume = useCallback((vol: number) => {
    player.volume = vol / 100
  }, [player])

  return (
    <playerContext.Provider
      value={{
        player,
        currentTime,
        isPlaying,
        duration,
        play,
        volumeState: [volume, setVolume]
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}
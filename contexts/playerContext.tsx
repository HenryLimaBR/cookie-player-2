import React, { createContext, useEffect, useCallback } from 'react'

type PlayerContextProps = {
  player: HTMLAudioElement
  currentTime: number
  isPlaying: boolean
  duration: number
  play: () => Promise<void>
}

export const playerContext = createContext({} as PlayerContextProps)

type Props = {
  children: React.ReactNode
}

export const PlayerContextProvider: React.FC<Props> = (props) => {
  const [player, setPlayer] = React.useState<HTMLAudioElement>({} as HTMLAudioElement)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [duration, setDuration] = React.useState(0)

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

      player.addEventListener('timeupdate', currentTimeCallback)

      player.addEventListener('playing', isPlayingCallback)
      player.addEventListener('pause', isPlayingCallback)
      player.addEventListener('ended', isPlayingCallback)

      player.addEventListener('canplay', durationCallback)

      return () => {
        player.removeEventListener('timeupdate', currentTimeCallback)

        player.removeEventListener('playing', isPlayingCallback)
        player.removeEventListener('pause', isPlayingCallback)
        player.removeEventListener('ended', isPlayingCallback)

        player.removeEventListener('canplay', durationCallback)
      }
    }
  }, [player])

  const play = useCallback(() => {
    return player.play()
  }, [player])

  return (
    <playerContext.Provider
      value={{
        player,
        currentTime,
        isPlaying,
        duration,
        play
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}
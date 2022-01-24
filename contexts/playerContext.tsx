import React, { createContext, useEffect } from 'react'
import { Player } from '../services/client/player'

type PlayerContextProps = {
  player: Player
  currentTime: number
  isPlaying: boolean
  duration: number
}

export const playerContext = createContext({} as PlayerContextProps)

type Props = {
  children: React.ReactNode
}

export const PlayerContextProvider: React.FC<Props> = (props) => {
  const [player, setPlayer] = React.useState<Player>({} as Player)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [duration, setDuration] = React.useState(0)

  useEffect(() => {
    if (!player.ready) {
      setPlayer(new Player())
    } else {
      const currentTimeCallback = () => {
        setCurrentTime(player.core.currentTime)
      }
      const isPlayingCallback = () => {
        setIsPlaying(!player.core.paused && !player.core.ended)
      }
      const durationCallback = () => {
        setDuration(player.core.duration)
      }

      player.core.addEventListener('timeupdate', currentTimeCallback)

      player.core.addEventListener('playing', isPlayingCallback)
      player.core.addEventListener('pause', isPlayingCallback)
      player.core.addEventListener('ended', isPlayingCallback)

      player.core.addEventListener('canplay', durationCallback)

      return () => {
        player.core.removeEventListener('timeupdate', currentTimeCallback)

        player.core.removeEventListener('playing', isPlayingCallback)
        player.core.removeEventListener('pause', isPlayingCallback)
        player.core.removeEventListener('ended', isPlayingCallback)

        player.core.removeEventListener('canplay', durationCallback)
      }
    }
  }, [player])

  return (
    <playerContext.Provider
      value={{
        player,
        currentTime,
        isPlaying,
        duration,
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}
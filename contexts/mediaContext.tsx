import React, { createContext, useCallback, useContext } from 'react'
import type { SearchAudioData } from '../@types/media'

import { getAudio } from '../services/client/api'
import { playerContext } from './playerContext'

type MediaContextProps = {
  currentMedia: SearchAudioData
  playCurrentMedia: (data: SearchAudioData) => Promise<void>
}

export const mediaContext = createContext({} as MediaContextProps)

type Props = {
  children: React.ReactNode
}

export const MediaContextProvider: React.FC<Props> = (props) => {
  const [currentMedia, setCurrentMedia] = React.useState<SearchAudioData>({} as SearchAudioData)
  const { player, play } = useContext(playerContext)

  const playCurrentMedia = useCallback(async (data: SearchAudioData) => {
    const audio = await getAudio(data.url)

    try {
      player.src = audio.url
      play()
    } catch (err) {
      console.warn(err)
    } finally {
      setCurrentMedia(data) 
    }
  }, [player, play])

  return (
    <mediaContext.Provider value={{
      currentMedia,
      playCurrentMedia
    }}>
      {props.children}
    </mediaContext.Provider>
  )
}
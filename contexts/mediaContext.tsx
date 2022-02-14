import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { SearchAudioData } from '../@types/media'

import { getAudio } from '../services/client/api'
import { playerContext } from './playerContext'
// import { useLocalStorage } from '../hooks/useLocalStorage'

type MediaContextProps = {
  currentMedia: SearchAudioData
  playCurrentMedia: (data: SearchAudioData) => Promise<void>
}

export const mediaContext = createContext({} as MediaContextProps)

type Props = {
  children: React.ReactNode
}

export const MediaContextProvider: React.FC<Props> = (props) => {
  const { player } = useContext(playerContext)
  // const [currentMedia, setCurrentMedia] = useLocalStorage<SearchAudioData>('@cp2/lastMedia', {} as SearchAudioData)
  const [currentMedia, setCurrentMedia] = useState<SearchAudioData>({} as SearchAudioData)

  const setMetaData = useCallback((data: SearchAudioData) => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: data.title,
        artwork: [
          { src: `/_next/image?url=${data.image}&w=128&q=75`, sizes: '128x128', type: 'image/jpg' }
        ]
      })
    }
  }, [])

  const playCurrentMedia = useCallback(async (data: SearchAudioData) => {
    const audio = await getAudio(data.url)
    try {
      player.src = audio.url
      player.play()
    } catch (err) {
      console.warn(err)
    } finally {
      setCurrentMedia(data)
      setMetaData(data)
    }
  }, [player, setCurrentMedia, setMetaData])

  return (
    <mediaContext.Provider value={{
      currentMedia,
      playCurrentMedia
    }}>
      {props.children}
    </mediaContext.Provider>
  )
}
import React, { useContext } from 'react'
import Image from 'next/image'
import type { VideoSearchResult } from 'yt-search'
import { playerContext } from '../../contexts/playerContext'
import { getAudio } from '../../services/client/api'

import { SearchItemWrapper } from './styles'

type Props = {
  children?: React.ReactNode
  video: VideoSearchResult
}

export const SearchItem: React.FC<Props> = ({ video }) => {
  const { player, play } = useContext(playerContext)

  const handleClick = async () => {
    const audio = await getAudio(video.url)
    try {
      player.src = audio.url
      play()
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <SearchItemWrapper className='img' onClick={handleClick}>
      <div className='image-container'>
        <Image
          src={video.image}
          width={24}
          height={24}
          alt={video.title}
          objectFit='cover'
          objectPosition='center'
          className='next-image'
        />
      </div>
      <div className='content-container'>
        <a>{video.title}</a>
      </div>
    </SearchItemWrapper>
  )
}
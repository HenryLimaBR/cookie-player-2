import React, { useContext } from 'react'
import Image from 'next/image'
import type { SearchAudioData } from '../../@types/media'

import { SearchItemWrapper } from './styles'

import { mediaContext } from '../../contexts/mediaContext'
import { SoundBars } from '../SoundBars'
import { playerContext } from '../../contexts/playerContext'

type Props = {
  children?: React.ReactNode
  data: SearchAudioData
  index: number
}

export const SearchItem: React.FC<Props> = ({ data, index }) => {
  const { currentMedia, playCurrentMedia } = useContext(mediaContext)
  const { isPlaying } = useContext(playerContext)

  return (
    <SearchItemWrapper className='img' onClick={() => playCurrentMedia(data)}>
      <div className='status-container'>
        {
          currentMedia.id === data.id && isPlaying
            ? <SoundBars size={24} />
            : <span>{index + 1}</span>
        }
      </div>
      <div className='image-container'>
        <Image
          src={data.image}
          width={56}
          height={56}
          alt={data.title}
          objectFit='cover'
          objectPosition='center'
          className='next-image'
        />
      </div>
      <div className='content-container'>
        <span>{data.title}</span>
        <span>{data.timestamp}</span>
      </div>
    </SearchItemWrapper>
  )
}
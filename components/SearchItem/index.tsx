import React, { useContext } from 'react'
import Image from 'next/image'
import type { SearchAudioData } from '../../@types/media'

import { playerContext } from '../../contexts/playerContext'
import { getAudio } from '../../services/client/api'

import { SearchItemWrapper } from './styles'

type Props = {
  children?: React.ReactNode
  data: SearchAudioData
}

export const SearchItem: React.FC<Props> = ({ data }) => {
  const { player, play } = useContext(playerContext)

  const handleClick = async () => {
    const audio = await getAudio(data.url)
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
          src={data.image}
          width={24}
          height={24}
          alt={data.title}
          objectFit='cover'
          objectPosition='center'
          className='next-image'
        />
      </div>
      <div className='content-container'>
        <a>{data.title}</a>
      </div>
    </SearchItemWrapper>
  )
}
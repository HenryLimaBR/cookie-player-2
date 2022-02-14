import React, { useContext, useState } from 'react'
import Image from 'next/image'
import type { SearchAudioData } from '../../@types/media'
import { MdPlayArrow, MdPause } from 'react-icons/md'

import { ItemWrapper } from './styles'

import { mediaContext } from '../../contexts/mediaContext'
import { SoundBars } from '../SoundBars'
import { playerContext } from '../../contexts/playerContext'

type Props = {
  children?: React.ReactNode
  data: SearchAudioData
  index: number
}

export const Item: React.FC<Props> = ({ data, index }) => {
  const { currentMedia, playCurrentMedia } = useContext(mediaContext)
  const { isPlaying, player } = useContext(playerContext)

  const [hovering, setHovering] = useState(false)

  return (
    <ItemWrapper
      className='img'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      isActive={currentMedia.id === data.id && !isPlaying}
    >
      <div className='status-container'>
        {
          hovering
            ? isPlaying && currentMedia.id === data.id
              ? (<MdPause size={24} onClick={() => player.pause()} />)
              : (<MdPlayArrow size={24} onClick={
                () => currentMedia.id === data.id
                  ? player.play()
                  : playCurrentMedia(data)
              } />)
            : isPlaying && currentMedia.id === data.id
              ? (<SoundBars size={20} />)
              : (<span>{index + 1}</span>)
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
          priority={index < 2}
        />
      </div>
      <div className='content-container'>
        <span>{data.title}</span>
        <span>{data.timestamp}</span>
      </div>
    </ItemWrapper>
  )
}
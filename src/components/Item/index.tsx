import React, { useContext, useState } from 'react'
import Image from 'next/image'
import type { AudioData } from '../../@types/media'
import { MdPlayArrow, MdPause } from 'react-icons/md'

import { ItemWrapper } from './styles'

import { mediaContext } from '../../contexts/mediaContext'
import { SoundBars } from '../SoundBars'
import { playerContext } from '../../contexts/playerContext'
import { getAudio } from '../../services/client/api'

type Props = {
  data: AudioData
  index: number
}

export const Item: React.FC<Props> = ({ data, index }) => {
  const { isPlaying, player } = useContext(playerContext)
  const [current, setCurrent] = useContext(mediaContext).current

  const [hovering, setHovering] = useState(false)

  const setPlay = (data: AudioData) => {
    setCurrent(data)
    getAudio(data.url)
      .then((data) => {
        player.src = data.url
        player.play()
      })
  }

  return (
    <ItemWrapper
      className='img'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      isActive={current.id === data.id && !isPlaying}
    >
      <div className='status-container'>
        {
          hovering
            ? isPlaying && current.id === data.id
              ? (<MdPause size={24} onClick={() => player.pause()} />)
              : (<MdPlayArrow size={24} onClick={
                () => current.id === data.id
                  ? player.play()
                  : setPlay(data)
              } />)
            : isPlaying && current.id === data.id
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
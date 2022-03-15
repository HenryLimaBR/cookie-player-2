import React, { useContext } from 'react'
import Image from 'next/image'

import { AudioInfoWrapper } from './styles'

import { mediaContext } from '../../contexts/mediaContext'

type Props = {
  children?: React.ReactNode
}

export const AudioInfo: React.FC<Props> = (props) => {
  const [current] = useContext(mediaContext).current

  return (
    <AudioInfoWrapper>
      <div className='image-container'>
        {
          current && current.id && (
            <Image
              src={current.image}
              width={56}
              height={56}
              quality={90}
              alt={current.title}
              objectFit='cover'
              objectPosition='center'
            />
          )
        }
      </div>

      <div className='info-container'>
        <strong>{current.title}</strong>
      </div>
    </AudioInfoWrapper>
  )
}
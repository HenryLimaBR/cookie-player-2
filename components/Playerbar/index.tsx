import React, { useContext } from 'react'
import { PlayerbarWrapper } from './styles'
import Head from 'next/head'

import { playerContext } from '../../contexts/playerContext'
import { parseSeconds } from '../../utils/time'
import { theme } from '../../themes/default'

interface IProps {
  children?: React.ReactNode
}

export const Playerbar: React.FC<IProps> = (props) => {
  const { currentTime, isPlaying, duration } = useContext(playerContext)

  return (
    <PlayerbarWrapper>
      {
        isPlaying && (
          <Head>
            <title>🍁 {parseSeconds(currentTime, duration)} No Media - No Author</title>
          </Head>
        )
      }

      <h1 style={{ color: theme.colors.fg5 }}>{parseSeconds(currentTime, duration)}</h1>
      <h1 style={{ color: theme.colors.fg5 }}>{String(isPlaying)}</h1>
    </PlayerbarWrapper>
  )
}
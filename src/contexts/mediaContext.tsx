import Head from 'next/head'
import React, { createContext, useState } from 'react'
import type { State } from '../@types/generic'
import type { AudioData } from '../@types/media'

type MediaContextProps = {
  current: State<AudioData>
}

export const mediaContext = createContext({} as MediaContextProps)

type Props = {}

export const MediaContextProvider: React.FC<Props> = (props) => {
  const [current, setCurrent] = useState<AudioData>({} as AudioData)

  return (
    <mediaContext.Provider value={
      {
        current: [current, setCurrent]
      }
    }>
      <>
        <Head>
          {current.id && <title>{current.title}</title>}
        </Head>
        {props.children}
      </>
    </mediaContext.Provider>
  )
}
import React, { createContext } from 'react'

type MediaContextProps = {

}

export const mediaContext = createContext({} as MediaContextProps)

type Props = {
  children: React.ReactNode
}

export const MediaContextProvider: React.FC<Props> = (props) => {
  return (
    <mediaContext.Provider value={{}}>
      {props.children}
    </mediaContext.Provider>
  )
}
import React, { createContext } from 'react'
import type { State } from '../@types/generic'

type LayoutContextProps = {
  sidebar: State<boolean>
}

export const layoutContext = createContext({} as LayoutContextProps)

type Props = {
}

export const LayoutContextProvider: React.FC<Props> = (props) => {
  const [sidebar, setSidebar] = React.useState(true)

  return (
    <layoutContext.Provider value={
      {
        sidebar: [sidebar, setSidebar]
      }
    }>
      {props.children}
    </layoutContext.Provider>
  )
}
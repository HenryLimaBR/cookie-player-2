import React, { createContext, useCallback, useState } from 'react'
import type { SearchAudioData } from '../@types/media'
import { getSearch } from '../services/client/api'

type SearchContextProps = {
  searchLoading: boolean
  searchResults: SearchAudioData[]
  search: (query: string) => Promise<void>
}

export const searchContext = createContext({} as SearchContextProps)

type Props = {
  children: React.ReactNode
}

export const SearchContextProvider: React.FC<Props> = (props) => {
  const [searchLoading, setSearchLoading] = useState(true)
  const [searchResults, setSearchResults] = React.useState<SearchAudioData[]>([])

  const search = useCallback(async (query: string) => {
    if (query.length < 1) return
    setSearchLoading(true)
    setSearchResults(await getSearch(query))
    setSearchLoading(false)
  }, [])

  return (
    <searchContext.Provider value={{
      searchLoading,
      searchResults,
      search
    }}>
      {props.children}
    </searchContext.Provider>
  )
}
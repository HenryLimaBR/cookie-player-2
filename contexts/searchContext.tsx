import React, { createContext, useCallback, useState } from 'react'
import { VideoSearchResult } from 'yt-search'
import { getSearch } from '../services/client/api'

type SearchContextProps = {
  searchLoading: boolean
  searchResults: VideoSearchResult[]
  search: (query: string) => Promise<void>
}

export const searchContext = createContext({} as SearchContextProps)

type Props = {
  children: React.ReactNode
}

export const SearchContextProvider: React.FC<Props> = (props) => {
  const [searchLoading, setSearchLoading] = useState(true)
  const [searchResults, setSearchResults] = React.useState<VideoSearchResult[]>([])

  const search = useCallback(async (query: string) => {
    setSearchLoading(true)
    setSearchResults(await getSearch(query))
    setSearchLoading(false)
  }, [])

  return (
    <searchContext.Provider value={{
      searchLoading: searchLoading,
      searchResults: searchResults,
      search
    }}>
      {props.children}
    </searchContext.Provider>
  )
}
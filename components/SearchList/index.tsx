import React from 'react'
import type { VideoSearchResult } from 'yt-search'

import { SearchListWrapper, SearchListComponent } from './styles'

import { SearchItem } from '../SearchItem'

type Props = {
  children?: React.ReactNode
  results: VideoSearchResult[]
}

export const SearchList: React.FC<Props> = (props) => {
  return (
    <SearchListWrapper>
      <SearchListComponent>
        {
          props.results.map((video) => (
            <SearchItem video={video} key={video.videoId} />
          ))
        }
      </SearchListComponent>
    </SearchListWrapper>
  )
}
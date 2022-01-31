import React from 'react'
import type { SearchAudioData } from '../../@types/media'

import { SearchListWrapper, SearchListComponent } from './styles'

import { SearchItem } from '../SearchItem'

type Props = {
  children?: React.ReactNode
  results: SearchAudioData[]
}

export const SearchList: React.FC<Props> = (props) => {
  return (
    <SearchListWrapper>
      <SearchListComponent>
        {
          props.results.map((data) => (
            <SearchItem data={data} key={data.id} />
          ))
        }
      </SearchListComponent>
    </SearchListWrapper>
  )
}
import React from 'react'
import type { AudioData } from '../../@types/media'

import { ListWrapper, ListComponent } from './styles'

import { Item } from '../Item'

type Props = {
  results: AudioData[]
}

export const List: React.FC<Props> = (props) => {
  return (
    <ListWrapper>
      <ListComponent>
        {
          props.results.map((data, index) => (
            <Item data={data} key={data.id} index={index} />
          ))
        }
      </ListComponent>
    </ListWrapper>
  )
}
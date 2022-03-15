import React from 'react'
import { StyledLoader } from './styles'

type LoaderProps = {
  size?: number
}

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <StyledLoader size={props.size || 54}>
      <div></div>
    </StyledLoader>
  )
}
import React from 'react'
import { StyledLoader } from './styles'

type LoaderProps = {
  children?: React.ReactNode
  size?: number
}

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <StyledLoader size={props.size || 54}>
      <div></div>
    </StyledLoader>
  )
}
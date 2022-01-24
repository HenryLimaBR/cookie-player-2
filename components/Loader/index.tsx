import React from 'react'
import { StyledLoader } from './styles'

interface IProps {
  children?: React.ReactNode
  size?: number
}

export const Loader: React.FC<IProps> = (props) => {
  return (
    <StyledLoader size={props.size || 54}>
      <div></div>
    </StyledLoader>
  )
}
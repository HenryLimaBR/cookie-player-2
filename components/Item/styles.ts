import styled, { keyframes } from 'styled-components'
import { theme } from '../../themes/default'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
type ItemWrapperProps = {
  isActive?: boolean
}

export const ItemWrapper = styled.li<ItemWrapperProps>`
  width: calc(100% - 16px);
  height: 64px;
  
  display: grid;
  grid-template-columns: 64px 64px 1fr;
  
  border-radius: 6px;
  overflow: hidden;

  transition: 250ms ease-out;
  animation: ${fadeIn} 250ms ease-out;

  user-select: none;

  color: ${({ isActive }) => isActive ? theme.colors.l1 : theme.colors.fg5};

  &:hover {
    background-color: ${theme.colors.bg3};
  }

  &:active {
    background-color: ${theme.colors.bg4};
  }

  .status-container {
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    span {
      font-size: 20px;
      font-weight: 300;
      text-align: center;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  
    overflow: hidden;

    img {
      border-radius: 3px;
    }
  }

  .content-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    span {
      margin-left: 8px;
      font-weight: bold;
      font-size: 14px;
    }
  }
`
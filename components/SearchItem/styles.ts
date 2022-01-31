import styled from 'styled-components'
import { theme } from '../../themes/default'

export const SearchItemWrapper = styled.li`
  width: calc(100% - 16px);
  
  display: grid;
  grid-template-columns: 32px 1fr;

  height: 32px;
  
  border-radius: 6px;

  background-color: ${theme.colors.bg3};

  overflow: hidden;

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
    justify-content: flex-start;
    align-items: center;

    a {
      margin-left: 8px;
      font-weight: bold;
    }
  }
`
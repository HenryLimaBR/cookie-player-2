import styled from 'styled-components'
import { theme } from '../../themes/default'

export const SearchItemWrapper = styled.li`
  width: 80%;
  
  display: grid;
  grid-template-columns: 32px 1fr;

  height: 32px;
  
  border-radius: 6px;

  background-color: ${theme.colors.bg4};

  overflow: hidden;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  
    overflow: hidden;

    .next-image {
      border-radius: 3px;
    }
  }

  .content-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
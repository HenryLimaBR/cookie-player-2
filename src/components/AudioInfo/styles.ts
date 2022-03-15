import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const AudioInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'image title';

  animation: ${fadeIn} 500ms ease-out backwards;
  user-select: none;

  .image-container {
    grid-area: 'image';

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-container {
    grid-area: 'info';

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    overflow: hidden;

    strong { 
      color: #c3c5c8;
      font-size: 12px;
      margin: 2px;
      text-overflow: ellipsis;
    }
  }
`
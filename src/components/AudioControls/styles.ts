import styled from 'styled-components'

export const AudioControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 24px 1fr;
`

export const AudioPlaybackSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    color: #a3a5a8;
    font-size: 12px;
    user-select: none;
  }

  user-select: none;
`

export const AudioButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .play {
    display: flex;
    justify-content: center;
    align-items: center;    

    width: 40px;
    height: 40px;

    border: 0;
    border-radius: 50%;

    color: #131518;
    background-color: #c3c5c8;

    transition: 100ms ease-out;

    cursor: pointer;
    user-select: none;

    &:hover {
      color: #131518;
      background-color: #f3f5f8;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`
import styled from 'styled-components'

import { theme } from '../../themes/default'

export const VolumeWrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 1fr;

  width: 120px;
  height: 24px;

  .mute-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    color: ${theme.colors.fg4};
    background-color: #0000;

    cursor: pointer;
    transition: 200ms ease-out;

    &:hover {
      color: ${theme.colors.l1};
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`
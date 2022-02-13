import styled from 'styled-components'

export const VolumeWrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr;

  justify-self: flex-end;
  align-self: center;

  margin-right: 16px;

  width: 120px;
  height: 24px;

  user-select: none;

  .mute-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    color: #838588;
    background-color: #0000;

    cursor: pointer;
    transition: 200ms ease-out;

    &:hover {
      color: #a3a5a8;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
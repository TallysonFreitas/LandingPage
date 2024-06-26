import styled from 'styled-components'

export const ContainerLinguagemItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  position: relative;
  transition: all 0.5 ease;
  pointer-events: none;

  &:hover {
    transform: scale(2, 0.5);
  }

  & > div {
    position: absolute;
    left: 0;
    bottom: -160px;
    padding-top: 24px;
    transition: all 1.5s ease;

    svg {
      transition: transform ease 1s;
      width: 80px;
      height: 100%;

      path {
        width: 80px;
        height: 100%;
      }
    }

    h4 {
      font-family: 'Bree Serif', serif;
      font-weight: 400;
      margin-bottom: 80px;
      transition: all 1.5s ease;
      pointer-events: none;
    }

    &:hover h4 {
      margin-top: 60px;
      margin-bottom: 8px;
    }

    &:hover {
      bottom: 0px;
    }

    p {
      padding: 0 4px;
      font-size: 16px;
      min-height: 94px;
      pointer-events: none;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`

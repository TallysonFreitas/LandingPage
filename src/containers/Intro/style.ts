import styled from 'styled-components'

export type ButtonType = {
  type: 'github' | 'linkedin'
}

export const LinkButton = styled.a<ButtonType>`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${(props) => (props.type === 'github' ? '#181818' : '#0077b5')};
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.3s;
  }

  &:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  &:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }
`

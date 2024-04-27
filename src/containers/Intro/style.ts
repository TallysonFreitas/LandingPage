import styled from 'styled-components'

export type ButtonType = {
  type: 'github' | 'linkedin'
}

export const Container = styled.section`
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    225deg,
    #24243e,
    #302b63,
    #131313
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    225deg,
    #24243e,
    #302b63,
    #131313
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Title = styled.h2`
  font-family: 'Bree Serif', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 5em;
`

export const Text = styled.p``

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

import styled from 'styled-components'

export const Container = styled.section`
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    315deg,
    #565656,
    #131313
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    315deg,
    #565656,
    #131313
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const Title = styled.h2`
  font-family: 'Bree Serif', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2em;

  span {
    font-family: 'Bree Serif', serif;
  }
`

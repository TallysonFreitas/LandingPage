import styled from 'styled-components'

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
  font-style: normal;
  font-size: 2em;

  span {
    font-family: 'Bree Serif', serif;
    font-style: normal;
    font-size: 1em;
  }
`

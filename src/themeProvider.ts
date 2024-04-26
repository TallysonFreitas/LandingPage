import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
}

section{
  padding:200px 0 160px;

  @media(max-width:768px){
    padding:120px 0 80px;
  }
}
`

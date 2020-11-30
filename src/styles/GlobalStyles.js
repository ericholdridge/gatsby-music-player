import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3 {
    color: rgb(54,54,54);
  }
  h3, h4 {
    font-weight: 300;
    color: rgb(100,100,100);
  }
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'
import antdCss from 'antd/dist/antd.css'

import { Roboto } from './fonts'

const GlobalStyle = createGlobalStyle`
  ${ antdCss }
  ${ Roboto }
  * {
    box-sizing: border-box;
  }
  html, body, #__next {
    margin: 0;
    padding: 0;
    outline: 0;
    height: 100%;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
`

export default GlobalStyle
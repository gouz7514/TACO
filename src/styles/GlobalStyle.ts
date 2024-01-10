import { createGlobalStyle } from "styled-components"
import ButtonColor from "./button"
import colorVariables from "./colors"

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: AppleSDGothic, -apple-system, BlinkMacSystemFont, sans-serif;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ${ButtonColor}
    ${colorVariables}
  }

  body {
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    padding: 1rem;
    z-index: 1;
    max-width: 600px;
    margin: auto;
    position: relative;
  }
`

export default GlobalStyle
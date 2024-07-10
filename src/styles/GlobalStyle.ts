import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}
#root, body, html {
  margin: 0 auto;
  padding: 0;
  font-size: 62.5%;
}
button{
  cursor:pointer;
}
`

export default GlobalStyles
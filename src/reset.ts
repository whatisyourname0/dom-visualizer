import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: "Montserrat", sans-serif;
`;

export default GlobalStyle;

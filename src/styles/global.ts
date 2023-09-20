import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${theme.colors.orange};
  }

  body {
    background-color: #14131b;
    color: ${theme.colors.almostWhite};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font: ${theme.font.size.default} JetBrains Mono, sans-serif;
  }
`}
`;

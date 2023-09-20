import { Home } from "./pages/Home";

import { StyleSheetManager, ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

import "rc-slider/assets/index.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("is")}>
        <GlobalStyle />
        <Home />
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App;

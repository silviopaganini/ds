import React, { PropsWithChildren } from "react";
import { Theme, ThemeProvider as TP } from "theme-ui";

const theme: Theme = {
  colors: {
    primary: "#FF0000",
  },
  buttons: {
    primary: {
      cursor: "pointer",
    },
  },
};

const internalTheme = theme;

type ThemeProviderProps = PropsWithChildren<{
  theme?: Theme;
}>;

const ThemeProvider = ({
  theme = internalTheme,
  children,
}: ThemeProviderProps) => <TP theme={theme}>{children}</TP>;

export { theme, ThemeProvider };

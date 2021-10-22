import React, { PropsWithChildren } from "react";
import { Theme, ThemeProvider as TP } from "theme-ui";

const theme: Theme = {
  colors: {
    primary: "0xFF0000",
  },
  buttons: {
    primary: {
      cursor: "pointer",
    },
  },
};

type ThemeProviderProps = PropsWithChildren<{
  theme: Theme;
}>;

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <TP theme={theme}>{children}</TP>
);

export { theme, ThemeProvider };

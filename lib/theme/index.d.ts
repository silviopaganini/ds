import { PropsWithChildren } from "react";
import { Theme } from "theme-ui";
declare const theme: Theme;
declare type ThemeProviderProps = PropsWithChildren<{
    theme?: Theme;
}>;
declare const ThemeProvider: ({ theme, children, }: ThemeProviderProps) => JSX.Element;
export { theme, ThemeProvider };

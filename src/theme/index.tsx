import React, { PropsWithChildren } from 'react'
import { Theme, ThemeProvider as TP } from 'theme-ui'

const defaultButton = {
  cursor: 'pointer',
  transition: 'opacity 0.1s',
  '&:hover': {
    opacity: 0.5,
  },
}

const theme: Theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {
      ...defaultButton,
      bg: 'primary',
    },
    secondary: {
      ...defaultButton,
      bg: 'secondary',
    },
  },
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
  },
}

const internalTheme = theme

type ThemeProviderProps = PropsWithChildren<{
  theme?: Theme
}>

const PlatinionProvider = ({ theme = internalTheme, children }: ThemeProviderProps) => (
  <TP theme={theme}>{children}</TP>
)

export { theme, PlatinionProvider }

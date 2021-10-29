import React, { PropsWithChildren } from 'react'
import { Theme, ThemeProvider as TP } from 'theme-ui'
import type { ThemeUIStyleObject } from 'theme-ui'

const defaultButton: ThemeUIStyleObject = {
  cursor: 'pointer',
  transition: 'opacity 0.1s',
  borderRadius: '5px',
  fontSize: [0, 1, 2],
  fontWeight: 'heading',
  py: 3,
  px: 4,
  lineHeight: [1.33333333, 1.42857143, 1.5],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'button',
  '&:hover': {
    opacity: 0.5,
  },
}

const theme: Theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72],
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512],
  sizes: {
    button: 140,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0066FF',
    secondary: '#05a',
    accent: '#0066FF',
    accent10: 'rgba(0, 102, 255, 0.1)',
    muted: '#f6f6f6',
    darkPrimary: '#272937',
    darkTertiary: '#27293759',
    dark5: '#2729370D',
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
    heading: 1.5,
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
    outline: {
      ...defaultButton,
      bg: 'background',
      border: '1px solid rgba(39, 41, 55, 0.35)',
      color: 'darkPrimary',
    },
    accent: {
      ...defaultButton,
      bg: 'accent10',
      color: 'accent',
    },
    muted: {
      ...defaultButton,
      bg: 'dark5',
      color: 'darkTertiary',
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

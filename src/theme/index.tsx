import React, { PropsWithChildren } from 'react'
import { Theme, ThemeProvider as TP } from 'theme-ui'
import type { ThemeUIStyleObject } from 'theme-ui'
import deepmerge from 'deepmerge'

const defaultButton: ThemeUIStyleObject = {
  cursor: 'pointer',
  transition: 'opacity 0.1s',
  borderRadius: '5px',
  fontSize: [0, 1, 2],
  fontWeight: 'heading',
  py: [3, 4, 5],
  px: [4, 5, 6],
  lineHeight: [1.33333333, 1.42857143, 1.5],
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    opacity: 0.5,
  },
}

const defaultLink: ThemeUIStyleObject = {
  cursor: 'pointer',
  fontSize: [0, 1, 2],
  '&:hover': {
    span: {
      borderBottomColor: 'transparent',
    },
  },
}

const theme: Theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72],
  space: [0, 4, 8, 10, 12, 16, 24, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0066FF',
    secondary: '#05a',
    accent: '#0066FF',
    accent10: 'rgba(0, 102, 255, 0.1)',
    accent30: 'rgba(0, 102, 255, 0.3)',
    muted: '#f6f6f6',
    darkPrimary: '#272937',
    darkTertiary: '#27293759',
    dark5: '#2729370D',
    darkPrimary35: 'rgba(39, 41, 55, 0.35)',
    darkQuaternary: 'rgba(39, 41, 55, 0.12)',
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
  links: {
    primary: {
      ...defaultLink,
      color: 'primary',
      span: {
        borderBottom: '1px solid',
        borderBottomColor: 'accent30',
      },
    },
    secondary: {
      ...defaultLink,
      color: 'darkPrimary',
      span: {
        borderBottom: '1px solid',
        borderBottomColor: 'darkQuaternary',
      },
    },
    muted: {
      ...defaultLink,
      color: 'darkTertiary',
      span: {
        borderBottom: '1px solid',
        borderBottomColor: 'darkQuaternary',
      },
    },
  },
  buttons: {
    primary: {
      ...defaultButton,
      bg: 'primary',
    },
    secondary: {
      ...defaultButton,
      bg: 'background',
      border: '1px solid',
      borderColor: 'darkPrimary35',
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
    text: {
      ...defaultButton,
      bg: 'transparent',
      color: 'primary',
      px: 'initial',
      py: 'initial',
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
  <TP theme={deepmerge(internalTheme, theme)}>{children}</TP>
)

export { theme, PlatinionProvider }

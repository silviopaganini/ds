import React from 'react'
import { Button as B, Box } from 'theme-ui'
import type { ButtonProps } from 'theme-ui'

type Props = ButtonProps & {
  preIcon?: JSX.Element
  posIcon?: JSX.Element
}

export const Button = ({ posIcon, preIcon, children, ...props }: Props) => {
  return (
    <B {...props}>
      {preIcon && (
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} mr={children ? [1, 2, 3] : undefined}>
          {preIcon}
        </Box>
      )}
      {children}
      {posIcon && (
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} ml={children ? [1, 2, 3] : undefined}>
          {posIcon}
        </Box>
      )}
    </B>
  )
}

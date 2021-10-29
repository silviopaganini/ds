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
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} mr={[1, 2, 3]}>
          {preIcon}
        </Box>
      )}
      {children}
      {posIcon && (
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} ml={[1, 2, 3]}>
          {posIcon}
        </Box>
      )}
    </B>
  )
}

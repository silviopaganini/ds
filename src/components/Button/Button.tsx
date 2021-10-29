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
        <Box sx={{ lineHeight: 0 }} as="span" mr={2}>
          {preIcon}
        </Box>
      )}
      {children}
      {posIcon && (
        <Box sx={{ lineHeight: 0 }} as="span" ml={2}>
          {posIcon}
        </Box>
      )}
    </B>
  )
}

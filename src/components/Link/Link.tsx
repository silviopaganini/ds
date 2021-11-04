import React from 'react'
import { Link as L, Box } from 'theme-ui'
import type { LinkProps } from 'theme-ui'
import { IWithIcons } from '../../types'

type Props = LinkProps &
  IWithIcons & {
    underline?: boolean
  }

const Link = ({ posIcon, preIcon, underline, sx, variant, children, ...props }: Props) => {
  return (
    <L
      {...props}
      variant={variant}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexBasis: 'content',
        ...sx,
      }}
    >
      {preIcon && (
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} mr={children ? [1, 2, 3] : undefined}>
          {preIcon}
        </Box>
      )}
      <Box
        as="span"
        sx={
          !underline
            ? {
                borderBottom: 0,
              }
            : {}
        }
      >
        {children}
      </Box>
      {posIcon && (
        <Box sx={{ height: [15, 18, 22], lineHeight: 0 }} ml={children ? [1, 2, 3] : undefined}>
          {posIcon}
        </Box>
      )}
    </L>
  )
}

export { Link }
